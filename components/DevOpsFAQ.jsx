'use client';
import { useState } from 'react';
import { devopsFaqs } from '@/config/seo';

export default function DevOpsFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? -1 : i);
  };

  return (
    <section id="faq" className="card animate-fade-in-up delay-300">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase">
            DevOps Expertise & FAQ
          </span>
          <h2 className="section-title mb-0 mt-1">Frequently Asked Questions</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Everything recruiters, engineering managers, and clients need to know about my DevOps engineering capabilities.
        </p>
      </div>

      <div className="space-y-4">
        {devopsFaqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              className="rounded-2xl border transition-all duration-300 overflow-hidden"
              style={{
                background: isOpen ? 'rgba(15,23,42,0.95)' : 'rgba(15,23,42,0.5)',
                borderColor: isOpen ? 'rgba(6,182,212,0.4)' : 'rgba(51,65,85,0.4)',
                boxShadow: isOpen ? '0 10px 30px -10px rgba(6,182,212,0.15)' : 'none',
              }}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-slate-100 text-sm md:text-base flex items-center gap-3">
                  <span
                    className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-bold shrink-0"
                    style={{
                      background: isOpen ? 'rgba(6,182,212,0.2)' : 'rgba(51,65,85,0.4)',
                      color: isOpen ? '#22d3ee' : '#94a3b8',
                    }}
                  >
                    0{i + 1}
                  </span>
                  {faq.question}
                </span>
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    background: isOpen ? 'rgba(6,182,212,0.15)' : 'rgba(51,65,85,0.3)',
                    color: isOpen ? '#22d3ee' : '#94a3b8',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className={`px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 ${
                  isOpen ? 'block animate-fade-in' : 'hidden'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick hiring prompt */}
      <div
        className="mt-8 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.06), rgba(139,92,246,0.06))',
          borderColor: 'rgba(6,182,212,0.2)',
        }}
      >
        <div>
          <h3 className="font-bold text-slate-100 text-sm">Need a DevOps Engineer for your team or project?</h3>
          <p className="text-xs text-slate-400 mt-0.5">Available for full-time roles, contracts, and cloud consulting.</p>
        </div>
        <a
          href="mailto:muneebm361@gmail.com?subject=DevOps%20Engineering%20Inquiry"
          className="shrink-0 px-6 py-2.5 rounded-full font-semibold text-xs text-slate-900 transition-all duration-300 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
        >
          Contact Me Directly →
        </a>
      </div>
    </section>
  );
}
