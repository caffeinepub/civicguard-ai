import { moralStoriesEn, moralStoriesHi, type MoralStory } from '../data/moralStories';

export function getDailyStory(language: 'en' | 'hi'): MoralStory {
  const stories = language === 'hi' ? moralStoriesHi : moralStoriesEn;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % stories.length;
  return stories[index];
}
