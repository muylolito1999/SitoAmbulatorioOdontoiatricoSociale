import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { SiteContent } from '../content/types';
import { getContent, saveContent } from '../content/contentStore';

interface ContentContextValue {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
}

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(getContent);

  const setContent = useCallback((newContent: SiteContent) => {
    saveContent(newContent);
    setContentState(newContent);
  }, []);

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return ctx;
}
