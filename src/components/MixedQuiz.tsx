import React, { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, Trophy, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CATEGORIES,
  getQuestionsForCategory
} from '../data/questions';
import { CategoryId, Question } from '../types';

interface MixedQuizProps {
  onBack: () => void;
}

interface QuizQuestion extends Question {
  quizId: string;
}

type CategoryResult = {
  correct: number;
  total: number;
};

const shuffleArray = <T,>(items: T[]): T[] => {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i]
    ];
  }

  return shuffled;
};

/*
 * Pick a random number between 5 and 7.
 */
const getQuestionCount = () => {
  return Math.floor(Math.random() * 3) + 5;
};

/*
 * Create a mixed question pool.
 *
 * Each selected category contributes 5-7 random questions.
 * The final pool is shuffled so categories are mixed together.
 */
const createQuestionPool = (
  selectedCategories: CategoryId[]
): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];

  selectedCategories.forEach((categoryId) => {
    const categoryQuestions = getQuestionsForCategory(categoryId);

    const count = Math.min(
      getQuestionCount(),
      categoryQuestions.length
    );

    const selectedQuestions = shuffleArray(
      categoryQuestions
    ).slice(0, count);

    selectedQuestions.forEach((question) => {
      questions.push({
        ...question,
        quizId: `${categoryId}-${question.id}-${Math.random()}`
      });
    });
  });

  return shuffleArray(questions);
};

export const MixedQuiz: React.FC<MixedQuizProps> = ({
  onBack
}) => {
  const [selectedCategories, setSelectedCategories] =
    useState<CategoryId[]>([]);

  const [quizStarted, setQuizStarted] = useState(false);

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [selectedOption, setSelectedOption] =
    useState<number | null>(null);

  const [isAnswered, setIsAnswered] = useState(false);

  const [results, setResults] =
  useState<Partial<Record<CategoryId, CategoryResult>>>({});

  const [quizCompleted, setQuizCompleted] =
    useState(false);

  /*
   * Toggle category selection.
   */
  const toggleCategory = (categoryId: CategoryId) => {
    setSelectedCategories((previous) => {
      if (previous.includes(categoryId)) {
        return previous.filter(
          (id) => id !== categoryId
        );
      }

      return [...previous, categoryId];
    });
  };

  /*
   * Start a completely new mixed quiz.
   */
  const startQuiz = () => {
    if (selectedCategories.length < 3) return;

    const questionPool = createQuestionPool(
      selectedCategories
    );

    const initialResults: Partial<
  Record<CategoryId, CategoryResult>
> = {};

    selectedCategories.forEach((categoryId) => {
      initialResults[categoryId] = {
        correct: 0,
        total: questionPool.filter(
          (question) =>
            question.categoryId === categoryId
        ).length
      };
    });

    setQuestions(questionPool);
    setResults(initialResults);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizCompleted(false);
    setQuizStarted(true);
  };

  /*
   * Restart with the same selected categories,
   * but generate an entirely new question pool.
   */
  const restartQuiz = () => {
    startQuiz();
  };

  /*
   * Return to category selection.
   */
  const handleBackToSelection = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setResults({});
  };

  /*
   * Handle an answer.
   *
   * The answer is stored immediately and the next
   * question appears shortly afterwards.
   */
  const handleOptionClick = (optionIndex: number) => {
    if (isAnswered) return;

    const question = questions[currentQuestionIndex];

    if (!question) return;

    const correct =
      optionIndex === question.correctOptionIndex;

    setSelectedOption(optionIndex);
    setIsAnswered(true);

    setResults((previous) => {
  const currentResult =
    previous[question.categoryId] ?? {
      correct: 0,
      total: 0
    };

  return {
    ...previous,
    [question.categoryId]: {
      ...currentResult,
      correct:
        currentResult.correct +
        (correct ? 1 : 0)
    }
  };
});

    /*
     * Move immediately to the next question.
     *
     * A very short delay allows the user to see
     * whether their answer was correct.
     */
    setTimeout(() => {
      const nextIndex =
        currentQuestionIndex + 1;

      if (nextIndex >= questions.length) {
        setQuizCompleted(true);
      } else {
        setCurrentQuestionIndex(nextIndex);
        setSelectedOption(null);
        setIsAnswered(false);
      }
    }, 650);
  };

  /*
   * Category selection screen.
   */
  if (!quizStarted) {
    return (
      <div className="w-full max-w-3xl mx-auto py-10 px-6">

        {/* Header */}
        <div className="flex items-center mb-10">
          <button
            onClick={onBack}
            className="p-2 mr-4 text-neutral-400 hover:text-white
              bg-neutral-800/50 hover:bg-neutral-700/50
              rounded-lg transition-colors"
          >
            <ArrowLeft size={24} />
          </button>

          <div>
            <h2 className="text-2xl font-bold text-white">
              Mixed Challenge
            </h2>

            <p className="text-neutral-400 mt-1">
              Choose the categories you want to test.
            </p>
          </div>
        </div>

        {/* Category Selection */}
        <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-3xl p-7">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Select Categories
              </h3>

              <p className="text-sm text-neutral-400 mt-1">
                Select at least 3 categories.
              </p>
            </div>

            <div
              className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
                selectedCategories.length >= 3
                  ? 'bg-green-500/10 text-green-400'
                  : 'bg-neutral-700 text-neutral-400'
              }`}
            >
              {selectedCategories.length} selected
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CATEGORIES.map((category) => {
              const isSelected =
                selectedCategories.includes(category.id);

              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    toggleCategory(category.id)
                  }
                  className={`text-left p-5 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? 'bg-indigo-500/10 border-indigo-500 text-white'
                      : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-lg">
                        {category.name}
                      </h4>

                      <p className="text-sm text-neutral-400 mt-1">
                        {category.description}
                      </p>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-500'
                          : 'border-neutral-600'
                      }`}
                    >
                      {isSelected && (
                        <CheckCircle2
                          size={16}
                          className="text-white"
                        />
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Requirement message */}
          <div className="mt-6">
            {selectedCategories.length < 3 && (
              <p className="text-sm text-neutral-500 text-center">
                Select{' '}
                {3 - selectedCategories.length}{' '}
                more categor
                {3 - selectedCategories.length === 1
                  ? 'y'
                  : 'ies'}{' '}
                to continue.
              </p>
            )}
          </div>

          {/* Start */}
          <motion.button
            whileHover={
              selectedCategories.length >= 3
                ? { scale: 1.01 }
                : {}
            }
            whileTap={
              selectedCategories.length >= 3
                ? { scale: 0.99 }
                : {}
            }
            disabled={selectedCategories.length < 3}
            onClick={startQuiz}
            className={`w-full mt-6 py-4 rounded-xl font-bold
              transition-all ${
                selectedCategories.length >= 3
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                  : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
              }`}
          >
            Start Mixed Test
          </motion.button>
        </div>
      </div>
    );
  }

  /*
   * Results screen.
   */
  if (quizCompleted) {
    return (
      <div className="w-full max-w-3xl mx-auto py-12 px-6">

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <Trophy
            size={64}
            className="text-indigo-400 mx-auto mb-6"
          />

          <h2 className="text-3xl font-bold text-white mb-3">
            Test Complete!
          </h2>

          <p className="text-neutral-400 mb-10">
            Here's how you performed in each category.
          </p>

          <div className="space-y-4 text-left">
            {selectedCategories.map((categoryId) => {
              const category = CATEGORIES.find(
                (item) => item.id === categoryId
              );

              const result = results[categoryId];

              if (!category || !result) return null;

              const percentage =
                result.total > 0
                  ? Math.round(
                      (result.correct /
                        result.total) *
                        100
                    )
                  : 0;

              return (
                <motion.div
                  key={categoryId}
                  initial={{
                    y: 15,
                    opacity: 0
                  }}
                  animate={{
                    y: 0,
                    opacity: 1
                  }}
                  className="bg-neutral-800/50 border
                    border-neutral-700/50 p-5 rounded-2xl"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="font-bold text-white">
                        {category.name}
                      </h3>

                      <p className="text-sm text-neutral-500">
                        {result.correct} / {result.total}{' '}
                        correct
                      </p>
                    </div>

                    <span
                      className={`text-2xl font-bold ${
                        percentage >= 70
                          ? 'text-green-400'
                          : percentage >= 40
                          ? 'text-yellow-400'
                          : 'text-red-400'
                      }`}
                    >
                      {percentage}%
                    </span>
                  </div>

                  <div className="w-full bg-neutral-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${percentage}%`
                      }}
                      transition={{
                        duration: 0.6
                      }}
                      className="bg-indigo-500 h-full rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="space-y-3 mt-10">
            <button
              onClick={restartQuiz}
              className="w-full py-4 rounded-xl font-bold
                bg-indigo-600 hover:bg-indigo-500
                text-white transition-colors
                flex items-center justify-center gap-2"
            >
              <RotateCcw size={19} />
              Restart Test
            </button>

            <button
              onClick={handleBackToSelection}
              className="w-full py-4 rounded-xl font-bold
                bg-neutral-700 hover:bg-neutral-600
                text-white transition-colors"
            >
              Choose Categories Again
            </button>

            <button
              onClick={onBack}
              className="w-full py-4 rounded-xl font-bold
                bg-neutral-800 hover:bg-neutral-700
                text-neutral-300 transition-colors"
            >
              Return Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const question = questions[currentQuestionIndex];

  if (!question) {
    return null;
  }

  const progressPercentage =
    questions.length > 0
      ? Math.round(
          (currentQuestionIndex /
            questions.length) *
            100
        )
      : 0;

  const category = CATEGORIES.find(
    (item) => item.id === question.categoryId
  );

  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <button
          onClick={handleBackToSelection}
          className="p-2 text-neutral-400
            hover:text-white bg-neutral-800/50
            hover:bg-neutral-700/50 rounded-lg
            transition-colors"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="text-center">
          <p className="text-xs uppercase tracking-wider
            text-indigo-400 font-bold">
            {category?.name}
          </p>

          <h2 className="text-lg font-bold text-neutral-200">
            Mixed Challenge
          </h2>
        </div>

        <div className="w-10" />
      </div>

      {/* Progress */}
      <div className="mb-10">

        <div className="flex justify-between text-sm
          font-medium text-neutral-400 mb-2"
        >
          <span>
            Question {currentQuestionIndex + 1} of{' '}
            {questions.length}
          </span>

          <span>
            {progressPercentage}%
          </span>
        </div>

        <div className="w-full bg-neutral-800
          rounded-full h-2"
        >
          <motion.div
            animate={{
              width: `${progressPercentage}%`
            }}
            className="bg-indigo-500 h-full rounded-full"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.quizId}
          initial={{
            x: 20,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          exit={{
            x: -20,
            opacity: 0
          }}
        >

          {/* Question */}
          <div className="bg-neutral-800/40
            border border-neutral-700/50
            p-8 rounded-3xl mb-8"
          >
            <h3 className="text-2xl font-semibold
              text-white leading-relaxed"
            >
              {question.text}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map(
              (option, index) => {
                const isSelected =
                  selectedOption === index;

                const isCorrect =
                  index ===
                  question.correctOptionIndex;

                let buttonClass =
                  'bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700 hover:border-neutral-600';

                if (isAnswered) {
                  if (isSelected) {
                    buttonClass = isCorrect
                      ? 'bg-green-500/20 border-green-500 text-green-300'
                      : 'bg-red-500/20 border-red-500 text-red-300';
                  } else if (isCorrect) {
                    buttonClass =
                      'bg-green-500/10 border-green-500/50 text-green-400';
                  } else {
                    buttonClass =
                      'bg-neutral-800/50 border-neutral-800 text-neutral-500 opacity-50';
                  }
                }

                return (
                  <motion.button
                    key={index}
                    disabled={isAnswered}
                    whileHover={
                      !isAnswered
                        ? { scale: 1.01 }
                        : {}
                    }
                    whileTap={
                      !isAnswered
                        ? { scale: 0.99 }
                        : {}
                    }
                    onClick={() =>
                      handleOptionClick(index)
                    }
                    className={`w-full p-5 rounded-2xl
                      border-2 text-left font-medium
                      transition-all flex items-center
                      justify-between ${buttonClass}`}
                  >
                    <span>{option}</span>

                    {isAnswered &&
                      isSelected &&
                      (isCorrect ? (
                        <CheckCircle2
                          className="text-green-400"
                        />
                      ) : (
                        <span className="text-red-400">
                          ✕
                        </span>
                      ))}
                  </motion.button>
                );
              }
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};