import { createContext } from 'react';

export type Language = 'es' | 'en';

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  toggleLanguage: () => {},
  t: () => '',
});
