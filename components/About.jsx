import { useEffect, useState } from 'react';

const stats = [
  { k: 'Tenure', v: '03+' },
  { k: 'Clusters', v: 'AKS' },
  { k: 'Cycle', v: '−40%' },
  { k: 'SLA', v: '99.99' },
];

const roles = [
  'Senior DevOps Engineer',
  'Azure & AWS Cloud Architect',
  'Kubernetes & Docker Specialist',
  'CI/CD & GitOps Engineer',
  'Terraform & IaC Expert',
];

export default function About() {
<<<<<<< HEAD
  const [clock, setClock] = useState('--:--:--');
=======
  const [typed, setTyped] = useState('Senior DevOps Engineer');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState('Senior DevOps Engineer'.length);
  const [deleting, setDeleting] = useState(false);
>>>>>>> 022ea07 (Update deployment configuration for Production)

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
<<<<<<< HEAD
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
=======
    <section id="about" className="card animate-fade-in-up" style={{ paddingTop: '48px', paddingBottom: '48px' }} itemScope itemType="https://schema.org/Person">
      {/* Availability badge */}
      <div className="flex items-center gap-2 mb-8">
        <span
          className="pulse-dot inline-block w-2.5 h-2.5 rounded-full bg-green-400"
        />
        <span className="text-xs font-semibold text-green-400 tracking-widest uppercase">
          Available for Opportunities
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-5xl md:text-6xl font-black mb-3 leading-tight">
            <span className="text-slate-100" itemProp="givenName">Muhammad</span>
            <br />
            <span className="gradient-text" itemProp="familyName">Muneeb</span>
          </h1>

          <h2 className="text-lg md:text-xl font-bold text-cyan-400 mb-3 tracking-wide" itemProp="jobTitle">
            Senior DevOps Engineer &amp; Cloud Architect
          </h2>

          {/* Typewriter with SSR-accessible fallback */}
          <div className="flex items-center gap-2 mb-6 h-8">
            <span className="text-xl text-slate-300 font-medium">{typed}</span>
            <span
              className="inline-block w-0.5 h-6 bg-cyan-400"
              style={{ animation: 'blink 0.8s step-end infinite' }}
            />
            <span className="sr-only">
              Senior DevOps Engineer, Azure &amp; AWS Cloud Architect, Kubernetes &amp; Docker Specialist, CI/CD &amp; GitOps Engineer, Terraform &amp; IaC Expert
            </span>
          </div>

          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl" itemProp="description">
            Results-driven <strong className="text-slate-200 font-semibold">Senior DevOps Engineer</strong> and <strong className="text-slate-200 font-semibold">Cloud Solutions Architect</strong> specializing in{' '}
            <span className="text-cyan-400 font-semibold">Microsoft Azure, Amazon Web Services (AWS) &amp; Kubernetes</span>. Designing scalable{' '}
            <span className="text-slate-200 font-semibold">CI/CD automation pipelines</span> and Infrastructure as Code (Terraform, Ansible) to deliver measurable performance — including a{' '}
            <span className="text-cyan-400 font-semibold">40% reduction in release cycle duration</span>,{' '}
            <span className="text-purple-400 font-semibold">30% cloud infrastructure cost optimization</span>, and a{' '}
            <span className="text-green-400 font-semibold">99.99% high-availability SLA</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-3 rounded-full font-semibold text-sm text-slate-900 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                boxShadow: '0 0 20px rgba(6,182,212,0.3)',
              }}
            >
              Let&apos;s Work Together →
            </button>
            <button
              onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
              className="gradient-border-btn"
            >
              View Experience
            </button>
          </div>
        </div>

        {/* Right: Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card group hover:scale-105 transition-transform duration-300">
              <span
                className="text-3xl md:text-4xl font-black mb-1"
                style={{
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, #06b6d4, #0ea5e9)'
                    : 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
>>>>>>> 022ea07 (Update deployment configuration for Production)
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
