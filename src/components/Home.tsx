import React from 'react';
import { Category, AppProgress, CategoryId } from '../types';
import { CATEGORIES, getQuestionsForCategory } from '../data/questions';
import { Layout, Server, Database, Network, Play, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  progress: AppProgress;
  onSelectCategory: (categoryId: CategoryId) => void;
}

const ICONS: Record<CategoryId, React.ElementType> = {
  frontend: Layout,
  backend: Server,
  database: Database,
  system_design: Network,
};

const THEME: Record<CategoryId, {
  hover: string;
  iconBg: string;
  iconBorder: string;
  iconText: string;
  progressBg: string;
  progressShadow: string;
  statsText: string;
  buttonHover: string;
}> = {
  frontend: {
    hover: 'hover:border-indigo-500/50',
    iconBg: 'bg-indigo-500/10',
    iconBorder: 'border-indigo-500/20',
    iconText: 'text-indigo-400',
    progressBg: 'bg-indigo-500',
    progressShadow: 'shadow-[0_0_12px_rgba(99,102,241,0.5)]',
    statsText: 'text-indigo-400',
    buttonHover: 'hover:bg-indigo-400',
  },
  backend: {
    hover: 'hover:border-emerald-500/50',
    iconBg: 'bg-emerald-500/10',
    iconBorder: 'border-emerald-500/20',
    iconText: 'text-emerald-400',
    progressBg: 'bg-emerald-500',
    progressShadow: 'shadow-[0_0_12px_rgba(16,185,129,0.5)]',
    statsText: 'text-emerald-400',
    buttonHover: 'hover:bg-emerald-400',
  },
  database: {
    hover: 'hover:border-purple-500/50',
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
    iconText: 'text-purple-400',
    progressBg: 'bg-purple-500',
    progressShadow: 'shadow-[0_0_12px_rgba(168,85,247,0.5)]',
    statsText: 'text-purple-400',
    buttonHover: 'hover:bg-purple-400',
  },
  system_design: {
    hover: 'hover:border-orange-500/50',
    iconBg: 'bg-orange-500/10',
    iconBorder: 'border-orange-500/20',
    iconText: 'text-orange-400',
    progressBg: 'bg-orange-500',
    progressShadow: 'shadow-[0_0_12px_rgba(249,115,22,0.5)]',
    statsText: 'text-orange-400',
    buttonHover: 'hover:bg-orange-400',
  }
};

export const Home: React.FC<HomeProps> = ({ progress, onSelectCategory }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-6 flex flex-col flex-1">
      <header className='flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-neutral-800 pb-6 gap-6 md:gap-0'>
        <div>
          <h1 className='text-4xl font-black tracking-tighter text-white uppercase italic'>
            DevQuest<span className='text-indigo-500'>.</span>
          </h1>
          <p className='text-neutral-500 text-sm font-mono mt-1 uppercase tracking-widest'>Level 42 • Senior Architect</p>
        </div>
        <div className='flex gap-12'>
          <div className='text-right'>
            <p className='text-neutral-500 text-[10px] uppercase tracking-widest mb-1'>Global XP</p>
            <p className='text-2xl font-light tracking-tight'>12,450 <span className='text-xs text-indigo-400'>pts</span></p>
          </div>
          <div className='text-right'>
            <p className='text-neutral-500 text-[10px] uppercase tracking-widest mb-1'>Current Streak</p>
            <p className='text-2xl font-light tracking-tight'>14 <span className='text-xs text-orange-400'>days</span></p>
          </div>
        </div>
      </header>

      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
        {CATEGORIES.map((category) => {
          const catProgress = progress[category.id] || { score: 0, lives: 3, isComplete: false };
          const totalQuestions = getQuestionsForCategory(category.id).length;
          const progressPercent = totalQuestions > 0 ? (catProgress.score / totalQuestions) * 100 : 0;
          const Icon = ICONS[category.id];
          const theme = THEME[category.id];
          
          return (
            <div
              key={category.id}
              className={`group relative bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between transition-colors ${theme.hover}`}
            >
              <div className='flex justify-between items-start'>
                <div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 border ${theme.iconBg} ${theme.iconBorder}`}>
                    <Icon className={`w-6 h-6 ${theme.iconText}`} />
                  </div>
                  <h2 className='text-2xl font-bold tracking-tight mb-1 text-white'>{category.name}</h2>
                  <p className='text-neutral-500 text-sm leading-relaxed max-w-[300px]'>{category.description}</p>
                </div>
                <div className='text-right'>
                  <span className={`text-3xl font-mono font-bold ${theme.statsText}`}>{Math.round(progressPercent)}%</span>
                  <p className='text-[10px] text-neutral-600 uppercase tracking-widest'>Mastery</p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden mb-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`h-full rounded-full ${theme.progressBg} ${progressPercent > 0 ? theme.progressShadow : ''}`}
                  />
                </div>
                
                <button
                  onClick={() => onSelectCategory(category.id)}
                  className={`w-full py-4 font-bold uppercase text-xs tracking-[0.2em] rounded-xl transition-colors
                    ${progressPercent > 0 
                      ? `bg-white text-black ${theme.buttonHover}` 
                      : 'border border-neutral-700 text-neutral-300 hover:bg-neutral-800'}`}
                >
                  {catProgress.isComplete ? 'Review Module' : progressPercent > 0 ? 'Continue Module' : 'Start Module'}
                </button>
              </div>
            </div>
          );
        })}
      </main>

      <footer className='mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-neutral-600 uppercase tracking-[0.3em] gap-4 md:gap-0'>
        <div>&copy; 2024 DEVSYSTEMS INTERACTIVE</div>
        <div className='flex gap-8'>
          <span>Protocol: HTTPS/3</span>
          <span>Secure Node: 0x82f1</span>
          <span>v2.1.0-alpha</span>
        </div>
      </footer>
    </div>
  );
};
