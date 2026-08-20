/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { MixedQuiz } from './components/MixedQuiz';
import { AppProgress, CategoryId } from './types';
import { CATEGORIES } from './data/questions';

const LOCAL_STORAGE_KEY = 'devquest_progress';

const getDefaultProgress = (): AppProgress => {
  const progress: Partial<AppProgress> = {};

  CATEGORIES.forEach(c => {
    progress[c.id] = {
      score: 0,
      lives: 3,
      isComplete: false
    };
  });

  return progress as AppProgress;
};

export default function App() {
  const [progress, setProgress] =
    useState<AppProgress>(getDefaultProgress());

  const [activeCategory, setActiveCategory] =
    useState<CategoryId | null>(null);

  const [showMixedQuiz, setShowMixedQuiz] =
    useState(false);

  const [isLoaded, setIsLoaded] =
    useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(
      LOCAL_STORAGE_KEY
    );

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        setProgress(prev => ({
          ...prev,
          ...parsed
        }));
      } catch (e) {
        console.error(
          "Failed to parse progress",
          e
        );
      }
    }

    setIsLoaded(true);
  }, []);

  const handleUpdateProgress = (
    categoryId: CategoryId,
    newProgress: AppProgress[CategoryId]
  ) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        [categoryId]: newProgress
      };

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans selection:bg-indigo-500/30 flex flex-col">

      {showMixedQuiz ? (

        <MixedQuiz
          onBack={() => setShowMixedQuiz(false)}
        />

      ) : activeCategory ? (

        <Quiz
          categoryId={activeCategory}
          progress={progress[activeCategory]}
          onUpdateProgress={handleUpdateProgress}
          onBack={() => setActiveCategory(null)}
        />

      ) : (

        <Home
          progress={progress}
          onSelectCategory={setActiveCategory}
          onStartMixedQuiz={() =>
            setShowMixedQuiz(true)
          }
        />

      )}

    </div>
  );
}