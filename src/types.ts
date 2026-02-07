// src/types.ts

export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export interface SimulatorTask {
    id: number;
    title: string;
    description: string;
    initialData: (string | number | null)[][];
    targetCell: { row: number; col: number };
    expectedResult: string | number;
    hints: string[];
    xpReward: number;
    acceptedFormulas: string[];
}

export interface Slide {
    id: number;
    title?: string; // title is optional
    type: 'title' | 'content' | 'transition' | 'tip' | 'example' | 'practice' | 'text' | 'image' | 'code' | 'quiz' | 'simulator';
    content?: React.ReactNode; // content is optional
    examples?: { formula: string; description: string }[];
    tips?: React.ReactNode[];
}

export interface TipBoxProps {
    children: React.ReactNode;
    variant?: 'tip' | 'info' | 'warning' | 'success';
    className?: string;
}
