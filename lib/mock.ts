import type { GenerationResult } from '@/lib/types';

export const buildMockResult = (sourceUrl: string): GenerationResult => ({
  id: crypto.randomUUID(),
  sourceUrl,
  title: 'Shadow cut: the essential version',
  durationMinutes: 12,
  summary:
    'A concise, watchable version that keeps the original story arc, speaker tone, and the most recognizable visual moments while removing repetition and low-signal transitions.',
  documentSections: [
    {
      heading: 'Opening context',
      body:
        'The source video introduces a central question, frames why it matters, and sets up the viewer expectation before moving into evidence and examples.',
    },
    {
      heading: 'Main argument',
      body:
        'The strongest claims are grouped into three beats: problem, turning point, and practical takeaway. Repeated explanations are compressed into one clear sequence.',
    },
    {
      heading: 'Useful examples',
      body:
        'High-retention moments are preserved as short visual anchors so viewers can still recognize the original video after compression.',
    },
    {
      heading: 'Final takeaway',
      body:
        'The generated cut closes with the original conclusion and a tighter recap, keeping the background and voice feel consistent with the source.',
    },
  ],
  mindMap: [
    {
      label: 'Video goal',
      children: ['Central question', 'Viewer promise', 'Original hook'],
    },
    {
      label: 'Key points',
      children: ['Problem', 'Evidence', 'Examples', 'Takeaway'],
    },
    {
      label: 'Short-video plan',
      children: ['Preserve voice', 'Keep original scenes', 'Remove repetition'],
    },
  ],
  videoUrl:
    'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  createdAt: new Date().toISOString(),
});
