
import React from 'react';
import { 
  Home, 
  BookOpen, 
  Calculator, 
  TrendingUp, 
  History, 
  BarChart3, 
  RefreshCw, 
  CheckSquare, 
  MessageSquareCode,
  Newspaper,
  Info,
  Banknote,
  Lightbulb
} from 'lucide-react';
import { Page } from './types';

export interface NavItem {
  id: Page;
  label: string;
  icon: React.ReactNode;
  category?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Início', icon: <Home size={20} /> },
  { id: 'about', label: 'Carreira CA', icon: <Info size={20} /> },
  
  // Calculators
  { id: 'simple', label: 'Juro Simples', icon: <Calculator size={20} />, category: 'Cálculos' },
  { id: 'compound', label: 'Juro Composto', icon: <TrendingUp size={20} />, category: 'Cálculos' },
  { id: 'amortization', label: 'Amortização', icon: <History size={20} />, category: 'Cálculos' },
  { id: 'investment', label: 'Investimentos', icon: <BarChart3 size={20} />, category: 'Cálculos' },
  { id: 'salary', label: 'Salário Líquido', icon: <Banknote size={20} />, category: 'Cálculos' },
  { id: 'converter', label: 'Conversor', icon: <RefreshCw size={20} />, category: 'Cálculos' },
  
  // Tools
  { id: 'business', label: 'Viabilidade', icon: <Lightbulb size={20} />, category: 'Ferramentas' },
  { id: 'study', label: 'Estudo', icon: <CheckSquare size={20} />, category: 'Ferramentas' },
  { id: 'chat', label: 'Converse com JC', icon: <MessageSquareCode size={20} />, category: 'Ferramentas' },
  
  // Theory & News
  { id: 'theory', label: 'Teoria CA', icon: <BookOpen size={20} /> },
  { id: 'news', label: 'Notícias', icon: <Newspaper size={20} /> },
];

export const APP_CONFIG = {
  name: "CA app",
  website: "www.etgdh.net"
};

export const SCHOOL_INFO = {
  address: "Av. Deolinda Rodrigues, Luanda, Angola",
  phone: "+244 923 000 000",
  email: "contato@etgdh.net",
  website: "www.etgdh.net"
};
