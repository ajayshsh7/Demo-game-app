import { Category, Question } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'frontend', name: 'Front-end', description: 'React, CSS, Browser APIs' },
  { id: 'backend', name: 'Back-end', description: 'Node.js, APIs, Architecture' },
  { id: 'database', name: 'Database', description: 'SQL, NoSQL, Optimization' },
  { id: 'system_design', name: 'System Design', description: 'Scalability, Patterns' },
];

export const QUESTIONS: Record<string, Question[]> = {
  frontend: [
    {
      id: 'fe-1',
      categoryId: 'frontend',
      text: 'Which of the following hooks should be used for side effects in React?',
      options: ['useState', 'useEffect', 'useMemo', 'useCallback'],
      correctOptionIndex: 1,
    }
  ],
  backend: [
    {
      id: 'be-1',
      categoryId: 'backend',
      text: 'What is the primary purpose of a reverse proxy like Nginx?',
      options: [
        'To compile backend code', 
        'To directly serve database queries', 
        'To distribute incoming traffic and serve static files', 
        'To write log files to the client'
      ],
      correctOptionIndex: 2,
    }
  ],
  database: [
    {
      id: 'db-1',
      categoryId: 'database',
      text: 'Which property of a database transaction guarantees that either all operations complete successfully, or none do?',
      options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
      correctOptionIndex: 0,
    }
  ],
  system_design: [
    {
      id: 'sd-1',
      categoryId: 'system_design',
      text: 'In a microservices architecture, what pattern is commonly used to prevent cascading failures?',
      options: ['Singleton', 'Circuit Breaker', 'Adapter', 'Observer'],
      correctOptionIndex: 1,
    }
  ]
};

export const getQuestionsForCategory = (categoryId: string): Question[] => {
  return QUESTIONS[categoryId] || [];
};
