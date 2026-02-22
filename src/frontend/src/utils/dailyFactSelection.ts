import { civicFactsEn, civicFactsHi } from '../data/civicFacts';

export function getDailyFact(language: 'en' | 'hi'): string {
  const facts = language === 'hi' ? civicFactsHi : civicFactsEn;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % facts.length;
  return facts[index];
}
