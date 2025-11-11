// components/WhyWebsiteMattersSimple.tsx
import React from "react";

export default function WhyWebsiteMattersSimple() {
  return (
    <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-3">
          Why a modern website matters
        </h2>
        <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
          Unfortunately, a handshake isnt a first impression anymore These numbers explain why owners who modernize their site get more calls, visits, and trust.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="rounded-xl p-5 bg-white/5 border border-white/6">
            <div className="text-4xl font-extrabold text-amber-300">53%</div>
            <p className="text-zinc-300 mt-1 text-sm">of mobile visitors leave if a page takes &gt;3s to load.</p>
            <a
              className="text-xs text-zinc-400 mt-3 inline-block"
              href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/"
              target="_blank" rel="noreferrer"
            >
              Source — Think With Google
            </a>
          </div>

          <div className="rounded-xl p-5 bg-white/5 border border-white/6">
            <div className="text-4xl font-extrabold text-rose-300">76%</div>
            <p className="text-zinc-300 mt-1 text-sm">of local searches lead to a visit within 24 hours.</p>
            <a
              className="text-xs text-zinc-400 mt-3 inline-block"
              href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/"
              target="_blank" rel="noreferrer"
            >
              Source — Google
            </a>
          </div>

          <div className="rounded-xl p-5 bg-white/5 border border-white/6">
            <div className="text-4xl font-extrabold text-sky-300">75%</div>
            <p className="text-zinc-300 mt-1 text-sm">of users judge credibility by web design — design = trust.</p>
            <a
              className="text-xs text-zinc-400 mt-3 inline-block"
              href="https://credibility.stanford.edu/guidelines/index.html"
              target="_blank" rel="noreferrer"
            >
              Source — Stanford
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-block rounded-md px-4 py-2 bg-white/7 border border-white/10 text-zinc-50"
          >
            Get a quick site check
          </a>
          <p className="text-zinc-400 text-sm max-w-lg">
            Show these stats, then show a quick before/after image of your site — numbers + visual = instant trust.
          </p>
        </div>
      </div>
    </section>
  );
}
