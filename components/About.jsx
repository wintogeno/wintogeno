import { useState, useEffect } from 'react';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Apps Migrated' },
  { value: '50%', label: 'Faster Deployments' },
  { value: '99.99%', label: 'Uptime Achieved' },
];

const roles = [
  'Senior DevOps Engineer',
  'Azure & AWS Cloud Architect',
  'Kubernetes & Docker Specialist',
  'CI/CD & GitOps Engineer',
  'Terraform & IaC Expert',
];

export default function About() {
  const [typed, setTyped] = useState('Senior DevOps Engineer');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState('Senior DevOps Engineer'.length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIdx];
    const speed = deleting ? 50 : 80;

    const timeout = setTimeout(() => {
      if (!deleting && charIdx < currentRole.length) {
        setTyped(currentRole.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === currentRole.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIdx > 0) {
        setTyped(currentRole.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
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
              >
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 font-medium text-center">{stat.label}</span>
            </div>
          ))}

          {/* Contact snippets */}
          <div className="col-span-2 mt-2 flex flex-wrap gap-3">
            {[
              { icon: '📍', label: 'Islamabad, Pakistan' },
              { icon: '📧', label: 'muneebm361@gmail.com' },
              { icon: '📱', label: '+92 339 5153466' },
            ].map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-slate-400"
                style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(71,85,105,0.4)' }}
              >
                <span>{c.icon}</span>
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
