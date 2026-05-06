'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { buildMockResult } from '@/lib/mock';
import type { GenerationResult, GenerationStatus } from '@/lib/types';

type GameContextValue = {
  currentUrl: string;
  status: GenerationStatus;
  progress: number;
  results: GenerationResult[];
  activeResult: GenerationResult | null;
  setCurrentUrl: (url: string) => void;
  generateFromUrl: () => Promise<void>;
  deleteResult: (id: string) => void;
  selectResult: (id: string) => void;
};

const GameContext = createContext<GameContextValue | undefined>(undefined);

const generationSteps: Array<{ status: GenerationStatus; progress: number; wait: number }> = [
  { status: 'learning', progress: 18, wait: 450 },
  { status: 'summarizing', progress: 42, wait: 550 },
  { status: 'mapping', progress: 68, wait: 500 },
  { status: 'rendering', progress: 90, wait: 650 },
];

const wait = (ms: number) => new Promise((resolve) => {
  window.setTimeout(resolve, ms);
});

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [status, setStatus] = useState<GenerationStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<GenerationResult[]>([]);
  const [activeResultId, setActiveResultId] = useState<string | null>(null);

  const activeResult = useMemo(
    () => results.find((result) => result.id === activeResultId) ?? results[0] ?? null,
    [activeResultId, results],
  );

  const generateFromUrl = useCallback(async () => {
    if (!currentUrl.trim()) return;

    setProgress(6);
    for (const step of generationSteps) {
      setStatus(step.status);
      setProgress(step.progress);
      await wait(step.wait);
    }

    const result = buildMockResult(currentUrl.trim());
    setResults((existing) => [result, ...existing]);
    setActiveResultId(result.id);
    setStatus('done');
    setProgress(100);
  }, [currentUrl]);

  const deleteResult = useCallback((id: string) => {
    setResults((existing) => existing.filter((result) => result.id !== id));
    setActiveResultId((existing) => (existing === id ? null : existing));
  }, []);

  const selectResult = useCallback((id: string) => {
    setActiveResultId(id);
  }, []);

  const value = useMemo(
    () => ({
      currentUrl,
      status,
      progress,
      results,
      activeResult,
      setCurrentUrl,
      generateFromUrl,
      deleteResult,
      selectResult,
    }),
    [
      activeResult,
      currentUrl,
      deleteResult,
      generateFromUrl,
      progress,
      results,
      selectResult,
      status,
    ],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used inside GameProvider');
  }

  return context;
};
