import type { LucideIcon } from 'lucide-react';

export interface Challenge {
  display: string;
  solution: string;
  validate?: (input: string) => boolean; // Made optional since AI challenges won't have this
  hint: string;
  difficulty: number;
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Enemy {
  name: string;
  maxHealth: number;
  icon: LucideIcon;
  description: string;
}

export interface ArsenalCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  lessons: Lesson[];
}

export interface Lesson {
  title: string;
  description: string;
  examples: string[];
  explanation: string;
}