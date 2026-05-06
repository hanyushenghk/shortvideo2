'use client';

import { ArrowRight, Clipboard, Sparkles } from 'lucide-react';
import { useGame } from '@/context/GameContext';

const statusCopy = {
  idle: 'Ready for a long video',
  learning: 'Learning the source video',
  summarizing: 'Writing the concise document',
  mapping: 'Building the mind map',
  rendering: 'Rendering a short video cut',
  done: 'Your shadow cut is ready',
};

export function Generator() {
  const {
    currentUrl,
    setCurrentUrl,
    generateFromUrl,
    progress,
    status,
  } = useGame();

  const isWorking = ['learning', 'summarizing', 'mapping', 'rendering'].includes(status);

  return (
    <section className="grid gap-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-12">
      <div className="flex min-h-[520px] flex-col justify-between border-y border-[#151515] py-10">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 border border-[#151515] bg-[#fffcf5] px-3 py-2 text-sm font-semibold">
            <Sparkles size={16} aria-hidden="true" />
            Consumer video compression workspace
          </div>
          <h1 className="max-w-[780px] text-[clamp(48px,8vw,112px)] font-black leading-[0.9] tracking-normal">
            Shadow Video 2
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#4d493f]">
            Paste a long video link and generate a concise document, a mind map, and a recognizable short video under 15 minutes.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="video-url">Video link</label>
          <div className="flex min-h-14 items-center gap-3 border-2 border-[#151515] bg-[#fffcf5] px-4 shadow-[6px_6px_0_#151515]">
            <Clipboard size={20} aria-hidden="true" />
            <input
              id="video-url"
              className="focus-ring w-full bg-transparent text-base outline-none"
              placeholder="Paste a YouTube, TikTok, or video URL"
              value={currentUrl}
              onChange={(event) => setCurrentUrl(event.target.value)}
            />
          </div>
          <button
            className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 border-2 border-[#151515] bg-[#0f766e] px-6 font-bold text-white shadow-[6px_6px_0_#151515] transition hover:bg-[#0b5f59] disabled:cursor-not-allowed disabled:bg-[#8aa5a1]"
            type="button"
            disabled={!currentUrl.trim() || isWorking}
            onClick={generateFromUrl}
          >
            Generate
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="border-2 border-[#151515] bg-[#191918] p-4 text-white shadow-[8px_8px_0_#151515]">
        <div className="aspect-video w-full overflow-hidden bg-[#2a2925]">
          <div className="flex h-full flex-col justify-between p-5">
            <div className="flex items-center justify-between text-sm text-[#efe7d8]">
              <span>{statusCopy[status]}</span>
              <span>{progress}%</span>
            </div>
            <div className="grid gap-4">
              <div className="h-2 bg-[#454137]">
                <div
                  className="h-full bg-[#f2bb3c] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs font-bold uppercase tracking-normal text-[#151515]">
                <span className="bg-[#f2bb3c] px-2 py-2">Document</span>
                <span className="bg-[#7db9b3] px-2 py-2">Mind map</span>
                <span className="bg-[#f09078] px-2 py-2">Short cut</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
          <div className="border border-[#4b4942] p-3">
            <strong className="block text-lg">15m</strong>
            max target
          </div>
          <div className="border border-[#4b4942] p-3">
            <strong className="block text-lg">1x</strong>
            link upload
          </div>
          <div className="border border-[#4b4942] p-3">
            <strong className="block text-lg">3</strong>
            outputs
          </div>
        </div>
      </div>
    </section>
  );
}
