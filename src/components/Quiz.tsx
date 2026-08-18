import React, { useState, useEffect } from 'react';
import { CategoryId, CategoryProgress } from '../types';
import { CATEGORIES, getQuestionsForCategory } from '../data/questions';
import { ArrowLeft, Heart, HeartCrack, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface QuizProps {
  categoryId: CategoryId;
  progress: CategoryProgress;
  onUpdateProgress: (categoryId: CategoryId, newProgress: CategoryProgress) => void;
  onBack: () => void;
};

// Shuffle an array using Fisher-Yates
const shuffleQuestions = <T,>(items: T[]): T[] => {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export const Quiz: React.FC<QuizProps> = ({
  categoryId,
  progress,
  onUpdateProgress,
  onBack
}) => {
  const category = CATEGORIES.find((c) => c.id === categoryId)!;
  const allQuestions = getQuestionsForCategory(categoryId);

  /*
   * Keep the randomized question order for this category.
   *
   * We store question IDs rather than complete question objects.
   * This makes the state smaller and also allows the question data
   * to remain the single source of truth.
   */
  const storageKey = `devquest_remaining_questions_${categoryId}`;

  const [remainingQuestionIds, setRemainingQuestionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(storageKey);

      if (saved) {
        const savedIds: string[] = JSON.parse(saved);

        // Only keep IDs that still exist in the current question list.
        const validIds = savedIds.filter((id) =>
          allQuestions.some((question) => question.id === id)
        );

        if (validIds.length > 0) {
          return validIds;
        }
      }
    } catch (error) {
      console.error('Failed to restore question progress', error);
    }

    /*
     * No saved question pool exists, so create a completely
     * random order.
     */
    return shuffleQuestions(allQuestions).map((question) => question.id);
  });

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(progress.isComplete);

  /*
   * Find the actual question from the first ID in the
   * remaining randomized list.
   */
  const questionId = remainingQuestionIds[0];

  const question = allQuestions.find(
    (q) => q.id === questionId
  );

  /*
   * Save the remaining questions whenever the list changes.
   */
  useEffect(() => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify(remainingQuestionIds)
      );
    } catch (error) {
      console.error('Failed to save remaining questions', error);
    }
  }, [remainingQuestionIds, storageKey]);

  /*
   * Check whether all questions have been completed.
   */
  useEffect(() => {
    if (
      allQuestions.length > 0 &&
      remainingQuestionIds.length === 0
    ) {
      setQuizCompleted(true);

      localStorage.removeItem(storageKey);

      if (!progress.isComplete) {
        onUpdateProgress(categoryId, {
          ...progress,
          score: allQuestions.length,
          isComplete: true
        });
      }
    }
  }, [
    remainingQuestionIds.length,
    allQuestions.length,
    categoryId,
    onUpdateProgress,
    progress,
    storageKey
  ]);

  /*
   * Game over screen
   */
  if (gameOver) {
    return (
      <div className="w-full max-w-2xl mx-auto py-12 px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-neutral-800/80 p-8 rounded-3xl border border-red-500/30"
        >
          <HeartCrack size={64} className="text-red-500 mx-auto mb-6" />

          <h2 className="text-3xl font-bold text-white mb-4">
            Out of Lives!
          </h2>

          <p className="text-neutral-300 mb-8 max-w-md">
            You've lost all 3 lives. Your progress for {category.name} has been reset.
          </p>

          <button
            onClick={() => {
              onUpdateProgress(categoryId, {
                score: 0,
                lives: 3,
                isComplete: false
              });

              localStorage.removeItem(storageKey);

              onBack();
            }}
            className="w-full py-4 rounded-xl font-bold bg-neutral-700 hover:bg-neutral-600 text-white transition-colors"
          >
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  /*
   * Quiz completed screen
   */
  if (quizCompleted) {
    return (
      <div className="w-full max-w-2xl mx-auto py-12 px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-neutral-800/80 p-8 rounded-3xl border border-green-500/30"
        >
          <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />

          <h2 className="text-3xl font-bold text-white mb-4">
            Category Completed!
          </h2>

          <p className="text-neutral-300 mb-8 max-w-md">
            Great job! You have mastered the {category.name} questions.
          </p>

          <button
            onClick={onBack}
            className="w-full py-4 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            Continue Journey
          </button>
        </motion.div>
      </div>
    );
  }

  /*
   * Safety check
   */
  if (!question) {
    return null;
  }

  /*
   * Handle answer selection
   */
  const handleOptionClick = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const correct = index === question.correctOptionIndex;
    setIsCorrect(correct);

    if (correct) {
      setTimeout(() => {
        const newScore = Math.min(
          progress.score + 1,
          allQuestions.length
        );

        const isNowComplete = remainingQuestionIds.length === 1;

        /*
         * IMPORTANT:
         *
         * Remove the question that was just answered correctly.
         *
         * The remaining questions are already randomized,
         * so the next question will be random without repetition.
         */
        setRemainingQuestionIds((prev) =>
          prev.filter((id) => id !== question.id)
        );

        onUpdateProgress(categoryId, {
          ...progress,
          score: newScore,
          isComplete: isNowComplete
        });

        if (!isNowComplete) {
          resetState();
        }
      }, 1500);
    } else {
      /*
       * Wrong answers do NOT remove the question.
       *
       * This preserves your original behavior:
       * the player loses a life but can try the same question again.
       */
      const newLives = progress.lives - 1;

      onUpdateProgress(categoryId, {
        ...progress,
        lives: newLives
      });

      setTimeout(() => {
        if (newLives <= 0) {
          setGameOver(true);
        } else {
          resetState();
        }
      }, 1500);
    }
  };

  const resetState = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);
  };

  /*
   * Number of questions already completed
   */
  const completedQuestions =
    allQuestions.length - remainingQuestionIds.length;

  const progressPercentage =
    allQuestions.length > 0
      ? Math.round(
          (completedQuestions / allQuestions.length) * 100
        )
      : 0;

  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="p-2 text-neutral-400 hover:text-white bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg transition-colors"
        >
          <ArrowLeft size={24} />
        </button>

        <h2 className="text-xl font-bold text-neutral-200">
          {category.name}
        </h2>

        <div className="flex space-x-1">
          {[1, 2, 3].map((life) => (
            <Heart
              key={life}
              size={24}
              className={
                life <= progress.lives
                  ? "text-red-500"
                  : "text-neutral-700"
              }
              fill={
                life <= progress.lives
                  ? "currentColor"
                  : "none"
              }
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex justify-between text-sm font-medium text-neutral-400 mb-2">
          <span>
            Question {completedQuestions + 1} of {allQuestions.length}
          </span>

          <span>
            {progressPercentage}%
          </span>
        </div>

        <div className="w-full bg-neutral-800 rounded-full h-2">
          <motion.div
            initial={{ width: `${progressPercentage}%` }}
            animate={{
              width: `${progressPercentage}%`
            }}
            className="bg-indigo-500 h-full rounded-full"
          />
        </div>
      </div>

      {/* Question Card */}
      <motion.div
        key={question.id}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-neutral-800/40 border border-neutral-700/50 p-8 rounded-3xl mb-8"
      >
        <h3 className="text-2xl font-semibold text-white leading-relaxed">
          {question.text}
        </h3>
      </motion.div>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isActuallyCorrect =
            index === question.correctOptionIndex;

          let buttonClass =
            "bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700 hover:border-neutral-600";

          if (isAnswered) {
            if (isSelected) {
              buttonClass = isCorrect
                ? "bg-green-500/20 border-green-500 text-green-300"
                : "bg-red-500/20 border-red-500 text-red-300";
            } else if (isActuallyCorrect) {
              buttonClass =
                "bg-green-500/10 border-green-500/50 text-green-400";
            } else {
              buttonClass =
                "bg-neutral-800/50 border-neutral-800 text-neutral-500 opacity-50";
            }
          }

          return (
            <motion.button
              key={index}
              disabled={isAnswered}
              whileHover={!isAnswered ? { scale: 1.01 } : {}}
              whileTap={!isAnswered ? { scale: 0.99 } : {}}
              onClick={() => handleOptionClick(index)}
              className={`w-full p-5 rounded-2xl border-2 text-left font-medium transition-all flex items-center justify-between ${buttonClass}`}
            >
              <span>{option}</span>

              {isAnswered &&
                isSelected &&
                (
                  isCorrect
                    ? <CheckCircle2 className="text-green-400" />
                    : <XCircle className="text-red-400" />
                )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};