import React, { useState, useEffect } from 'react';
import { CategoryId, CategoryProgress, Question } from '../types';
import { CATEGORIES, getQuestionsForCategory } from '../data/questions';
import { ArrowLeft, Heart, HeartCrack, CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizProps {
  categoryId: CategoryId;
  progress: CategoryProgress;
  onUpdateProgress: (categoryId: CategoryId, newProgress: CategoryProgress) => void;
  onBack: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ categoryId, progress, onUpdateProgress, onBack }) => {
  const category = CATEGORIES.find((c) => c.id === categoryId)!;
  const allQuestions = getQuestionsForCategory(categoryId);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(progress.score);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(progress.isComplete);

  const question = allQuestions[currentQuestionIndex];
  
  // Guard for completing the quiz
  useEffect(() => {
    if (currentQuestionIndex >= allQuestions.length && allQuestions.length > 0) {
      setQuizCompleted(true);
      if (!progress.isComplete) {
        onUpdateProgress(categoryId, { ...progress, isComplete: true, score: allQuestions.length });
      }
    }
  }, [currentQuestionIndex, allQuestions.length, categoryId, onUpdateProgress, progress]);

  if (gameOver) {
    return (
      <div className="w-full max-w-2xl mx-auto py-12 px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-neutral-800/80 p-8 rounded-3xl border border-red-500/30">
          <HeartCrack size={64} className="text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Out of Lives!</h2>
          <p className="text-neutral-300 mb-8 max-w-md">You've lost all 3 lives. Your progress for {category.name} has been reset.</p>
          <button 
            onClick={() => {
              onUpdateProgress(categoryId, { score: 0, lives: 3, isComplete: false });
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

  if (quizCompleted) {
    return (
      <div className="w-full max-w-2xl mx-auto py-12 px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-neutral-800/80 p-8 rounded-3xl border border-green-500/30">
          <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Category Completed!</h2>
          <p className="text-neutral-300 mb-8 max-w-md">Great job! You have mastered the {category.name} questions.</p>
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

  if (!question) {
    return null;
  }

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    const correct = index === question.correctOptionIndex;
    setIsCorrect(correct);

    if (correct) {
      setTimeout(() => {
        const newScore = progress.score + 1;
        const isNowComplete = newScore >= allQuestions.length;
        
        onUpdateProgress(categoryId, {
          ...progress,
          score: newScore,
          isComplete: isNowComplete
        });
        
        if (!isNowComplete) {
          setCurrentQuestionIndex((prev) => prev + 1);
          resetState();
        }
      }, 1500);
    } else {
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
        <h2 className="text-xl font-bold text-neutral-200">{category.name}</h2>
        <div className="flex space-x-1">
          {[1, 2, 3].map((life) => (
            <Heart 
              key={life} 
              size={24} 
              className={life <= progress.lives ? "text-red-500" : "text-neutral-700"} 
              fill={life <= progress.lives ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex justify-between text-sm font-medium text-neutral-400 mb-2">
          <span>Question {currentQuestionIndex + 1} of {allQuestions.length}</span>
          <span>{Math.round(((currentQuestionIndex) / allQuestions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-neutral-800 rounded-full h-2">
          <motion.div 
            initial={{ width: `${(currentQuestionIndex / allQuestions.length) * 100}%` }}
            animate={{ width: `${((currentQuestionIndex + (isAnswered && isCorrect ? 1 : 0)) / allQuestions.length) * 100}%` }}
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
          const isActuallyCorrect = index === question.correctOptionIndex;
          
          let buttonClass = "bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700 hover:border-neutral-600";
          
          if (isAnswered) {
            if (isSelected) {
              buttonClass = isCorrect 
                ? "bg-green-500/20 border-green-500 text-green-300" 
                : "bg-red-500/20 border-red-500 text-red-300";
            } else if (isActuallyCorrect) {
              buttonClass = "bg-green-500/10 border-green-500/50 text-green-400";
            } else {
              buttonClass = "bg-neutral-800/50 border-neutral-800 text-neutral-500 opacity-50";
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
              {isAnswered && isSelected && (
                isCorrect ? <CheckCircle2 className="text-green-400" /> : <XCircle className="text-red-400" />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
