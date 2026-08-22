import { useEffect, useState } from 'react';

const stats = [
  { k: 'Tenure', v: '03+' },
  { k: 'Clusters', v: 'AKS' },
  { k: 'Cycle', v: '−40%' },
  { k: 'SLA', v: '99.99' },
];

export default function About() {
  const [clock, setClock] = useState('--:--:--');

  useEffect(() => {
    const tick = () => {
      setClock(
        new Date().toLocaleTimeString('en-PK', {
          hour12: false,
          timeZone: 'Asia/Karachi',
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="relative min-h-[100svh] flex flex-col justify-between px-6 md:px-12 lg:px-16 py-10 md:py-14">
      <div className="flex flex-wrap items-center justify-between gap-4 rise">
        <div className="flex items-center gap-3">
          <span className="live-dot inline-block w-2 h-2 rounded-full bg-mint" />
          <span className="tick text-mint">Prod · Healthy</span>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 tick text-sand">
          <span>PKT {clock}</span>
          <span>33.68° N · 73.04° E</span>
          <span>Islamabad</span>
        </div>
      </div>

      <div className="py-16 md:py-8">
        <p className="section-index rise delay-1 mb-6">01 — Index</p>
        <h1 className="display font-extrabold leading-[0.86] tracking-tightest rise delay-2">
          <span className="block text-[18vw] md:text-[11vw] lg:text-[9.5vw]">MUNEEB</span>
          <span className="block text-[18vw] md:text-[11vw] lg:text-[9.5vw] text-transparent" style={{ WebkitTextStroke: '1.5px #efe6d4' }}>
            DEVOPS
          </span>
        </h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end rise delay-3">
          <div className="lg:col-span-7">
            <p className="text-xl md:text-2xl font-medium leading-snug text-paper/90 max-w-2xl">
              DevOps engineer. I design, secure, and operate cloud platforms —
              Azure, AWS, Kubernetes — with the same discipline as a production runbook.
            </p>
            <p className="mt-5 text-sand max-w-xl leading-relaxed">
              Currently owning production and development AKS clusters at Cytomate
              for SARAB, ASM, BreachPlus, and BattleTwin. Ingress through Application
              Gateway and APIM. Delivery through a Hub and Spoke GitOps model.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#connect"
                className="inline-flex items-center gap-3 bg-signal text-paper px-6 py-3 tick hover:bg-paper hover:text-ink transition-colors"
              >
                Open a ticket →
              </a>
              <a
                href="/Muhammad_Muneeb_Resume.pdf"
                download
                className="inline-flex items-center gap-3 border border-paper/20 px-6 py-3 tick hover:border-signal hover:text-signal transition-colors"
              >
                Pull resume
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mark-corners p-5 border border-paper/10 bg-panel/60">
              <div className="flex items-center justify-between mb-4">
                <span className="tick text-sand">health.panel</span>
                <span className="tick text-mint">ok</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-paper/10">
                {stats.map((s) => (
                  <div key={s.k} className="bg-ink p-4">
                    <p className="tick text-sand mb-2">{s.k}</p>
                    <p className="display text-4xl font-extrabold tracking-tight">{s.v}</p>
                  </div>
                ))}
              </div>
              <p className="tick text-sand mt-4">
                muneebdevops.online · muneebm361@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between tick text-sand/70 rise delay-4">
        <span>Scroll the log</span>
        <span className="hidden sm:inline">Field notes from production</span>
        <span>↓</span>
      </div>
    </section>
  );
}
