export type GenerationStatus = 'idle' | 'learning' | 'summarizing' | 'mapping' | 'rendering' | 'done';

export type GenerationResult = {
  id: string;
  sourceUrl: string;
  title: string;
  durationMinutes: number;
  summary: string;
  documentSections: Array<{
    heading: string;
    body: string;
  }>;
  mindMap: Array<{
    label: string;
    children: string[];
  }>;
  videoUrl: string;
  createdAt: string;
};
