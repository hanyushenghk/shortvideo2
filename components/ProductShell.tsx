import { Check, Cloud, CreditCard, Repeat } from 'lucide-react';
import { Generator } from '@/components/Generator';
import { Results } from '@/components/Results';

const pipeline = [
  'Learn video content',
  'Extract key points',
  'Build mind map',
  'Render short video',
];

export function ProductShell() {
  return (
    <main className="shell">
      <div className="container">
        <header className="flex min-h-20 items-center justify-between border-b border-[#151515]">
          <a className="text-xl font-black" href="#top">Shadow Video 2</a>
          <nav className="hidden items-center gap-6 text-sm font-bold md:flex" aria-label="Primary navigation">
            <a href="#results">Results</a>
            <a href="#plans">Plans</a>
            <a href="#architecture">API</a>
          </nav>
          <button className="focus-ring border-2 border-[#151515] bg-[#fffcf5] px-4 py-2 font-bold shadow-[4px_4px_0_#151515]" type="button">
            Sign in
          </button>
        </header>

        <div id="top">
          <Generator />
        </div>

        <section className="grid gap-4 border-y border-[#151515] py-6 md:grid-cols-4">
          {pipeline.map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className="grid size-9 place-items-center border-2 border-[#151515] bg-[#f2bb3c] font-black">{index + 1}</span>
              <span className="font-bold">{item}</span>
            </div>
          ))}
        </section>

        <div id="results">
          <Results />
        </div>

        <section id="plans" className="grid gap-6 py-10 lg:grid-cols-[1fr_1fr_1fr]">
          <div className="border-2 border-[#151515] bg-[#fffcf5] p-6">
            <Repeat className="mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-black">Free trial</h2>
            <p className="mt-3 leading-7 text-[#4d493f]">Let users try enough long videos to feel the repeat-use value before subscription.</p>
          </div>
          <div className="border-2 border-[#151515] bg-[#0f766e] p-6 text-white shadow-[7px_7px_0_#151515]">
            <CreditCard className="mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-black">Subscription</h2>
            <p className="mt-3 leading-7 text-[#e8fffb]">Paid plans unlock more extraction credits, long-term history, and higher render priority.</p>
          </div>
          <div className="border-2 border-[#151515] bg-[#fffcf5] p-6">
            <Cloud className="mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-black">Cloud storage</h2>
            <p className="mt-3 leading-7 text-[#4d493f]">Generated files are designed for Cloudflare storage so users can download them anytime.</p>
          </div>
        </section>

        <section id="architecture" className="border-2 border-[#151515] bg-[#fffcf5] p-6 shadow-[7px_7px_0_#151515]">
          <h2 className="text-2xl font-black">V1 build boundary</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              'Accept YouTube, TikTok, and direct video links',
              'Return document, mind map, and short video artifacts',
              'Keep guest flow lightweight with optional account history',
              'Prepare API boundary for video analysis and generation vendors',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="mt-1 shrink-0 text-[#0f766e]" size={18} aria-hidden="true" />
                <span className="leading-7">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-8 text-sm text-[#6f6a61]">
          Shadow Video 2 is built for overseas consumers who want shorter, recognizable versions of long videos.
        </footer>
      </div>
    </main>
  );
}
