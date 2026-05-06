'use client';

import { Download, FileText, GitFork, Play, Trash2 } from 'lucide-react';
import { useGame } from '@/context/GameContext';

export function Results() {
  const { activeResult, results, deleteResult, selectResult } = useGame();

  return (
    <section className="grid gap-6 py-8 lg:grid-cols-[260px_1fr]">
      <aside className="border-2 border-[#151515] bg-[#fffcf5] p-4 shadow-[6px_6px_0_#151515]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-black">History</h2>
          <span className="text-sm text-[#6f6a61]">Guest mode</span>
        </div>
        <div className="grid gap-2">
          {results.length === 0 ? (
            <p className="text-sm leading-6 text-[#6f6a61]">
              Generated documents, mind maps, and videos will appear here during this visit.
            </p>
          ) : results.map((result) => (
            <div key={result.id} className="grid grid-cols-[1fr_auto] gap-2 border border-[#d9d2c6] bg-white p-2">
              <button
                className="focus-ring text-left text-sm font-bold"
                type="button"
                onClick={() => selectResult(result.id)}
              >
                {result.title}
              </button>
              <button
                aria-label="Delete history item"
                className="focus-ring grid size-8 place-items-center border border-[#151515]"
                type="button"
                onClick={() => deleteResult(result.id)}
              >
                <Trash2 size={15} aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </aside>

      <div className="grid gap-6">
        {!activeResult ? (
          <div className="border-2 border-dashed border-[#151515] bg-[#fffcf5] p-10 text-center text-[#6f6a61]">
            Paste a video link above to generate your first result.
          </div>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-3">
              <article className="border-2 border-[#151515] bg-[#fffcf5] p-5 shadow-[5px_5px_0_#151515]">
                <FileText className="mb-4" size={24} aria-hidden="true" />
                <h3 className="text-xl font-black">Document</h3>
                <p className="mt-3 text-sm leading-6 text-[#4d493f]">{activeResult.summary}</p>
              </article>
              <article className="border-2 border-[#151515] bg-[#fffcf5] p-5 shadow-[5px_5px_0_#151515]">
                <GitFork className="mb-4" size={24} aria-hidden="true" />
                <h3 className="text-xl font-black">Mind map</h3>
                <p className="mt-3 text-sm leading-6 text-[#4d493f]">Main ideas are grouped into a source-aware generation plan.</p>
              </article>
              <article className="border-2 border-[#151515] bg-[#fffcf5] p-5 shadow-[5px_5px_0_#151515]">
                <Play className="mb-4" size={24} aria-hidden="true" />
                <h3 className="text-xl font-black">Short video</h3>
                <p className="mt-3 text-sm leading-6 text-[#4d493f]">{activeResult.durationMinutes} minutes, preserving source voice and scenes where possible.</p>
              </article>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
              <div className="border-2 border-[#151515] bg-[#fffcf5] p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-black">Generated document</h3>
                  <button className="focus-ring grid size-10 place-items-center border-2 border-[#151515]" type="button" aria-label="Download document">
                    <Download size={18} aria-hidden="true" />
                  </button>
                </div>
                <div className="grid gap-5">
                  {activeResult.documentSections.map((section) => (
                    <section key={section.heading}>
                      <h4 className="font-black">{section.heading}</h4>
                      <p className="mt-2 leading-7 text-[#4d493f]">{section.body}</p>
                    </section>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                <div className="border-2 border-[#151515] bg-[#fffcf5] p-6">
                  <h3 className="mb-4 text-2xl font-black">Mind map</h3>
                  <div className="grid gap-4">
                    {activeResult.mindMap.map((node) => (
                      <div key={node.label} className="border-l-4 border-[#0f766e] pl-4">
                        <strong>{node.label}</strong>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {node.children.map((child) => (
                            <span key={child} className="border border-[#151515] bg-white px-3 py-1 text-sm">{child}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-2 border-[#151515] bg-[#191918] p-4 text-white">
                  <video className="aspect-video w-full bg-black" src={activeResult.videoUrl} controls />
                  <div className="mt-3 flex items-center justify-between gap-3 text-sm">
                    <span className="truncate">Source: {activeResult.sourceUrl}</span>
                    <button className="focus-ring grid size-10 shrink-0 place-items-center border border-white" type="button" aria-label="Download video">
                      <Download size={18} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
