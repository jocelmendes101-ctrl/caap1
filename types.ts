
export type Page = 'home' | 'about' | 'simple' | 'compound' | 'amortization' | 'investment' | 'converter' | 'salary' | 'study' | 'chat' | 'theory' | 'news' | 'business';

export type PeriodUnit = 'days' | 'months' | 'years';

export interface CalculationResult {
  j: number;
  m: number;
}

export interface Note {
  id: string;
  text: string;
  date: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface AgendaItem {
  id: string;
  title: string;
  date: string;
  time: string;
}
