import type { SiteContent } from './types';
import { defaultContent } from './defaultContent';

const STORAGE_KEY = 'ambulatorio-solidale-content';

export function getContent(): SiteContent {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultContent, ...JSON.parse(stored) };
    }
  } catch {
    // Fall through to default
  }
  return defaultContent;
}

export function saveContent(content: SiteContent): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function exportContentJSON(): string {
  return JSON.stringify(getContent(), null, 2);
}

export function importContentJSON(json: string): SiteContent {
  const parsed = JSON.parse(json) as SiteContent;
  saveContent(parsed);
  return parsed;
}

export function resetContent(): void {
  localStorage.removeItem(STORAGE_KEY);
}
