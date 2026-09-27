'use client';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'about', n: '01', label: 'Index' },
  { id: 'work', n: '02', label: 'Log' },
  { id: 'projects', n: '03', label: 'Work' },
  { id: 'skills', n: '04', label: 'Stack' },
  { id: 'education', n: '05', label: 'School' },
  { id: 'connect', n: '06', label: 'Ping' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = () => {
      const ids = navItems.map((i) => i.id);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 160) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

<<<<<<< HEAD
=======
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'faq', label: 'DevOps FAQ' },
    { id: 'education', label: 'Education' },
    { id: 'connect', label: 'Contact' },
  ];

>>>>>>> 022ea07 (Update deployment configuration for Production)
  return (
    <>
      {/* Desktop index rail */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-[72px] z-50 flex-col items-center justify-between py-6 border-r border-[rgba(239,230,212,0.1)] bg-ink">
        <button onClick={() => go('about')} className="group" aria-label="Home">
          <span className="display text-xl font-extrabold leading-none text-paper group-hover:text-signal transition-colors">
            MM
          </span>
        </button>

        <p className="rail-label tick text-sand/70">
          Muneeb · Islamabad · AKS
        </p>

        <a
          href="/Muhammad_Muneeb_Resume.pdf"
          download
          className="tick text-signal hover:text-paper"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          CV ↓
        </a>
      </aside>

      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-ink/90 backdrop-blur-md border-b border-[rgba(239,230,212,0.1)]">
        <span className="display font-extrabold text-lg tracking-tight">MM</span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="tick text-signal"
          aria-label="Menu"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-ink pt-20 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="flex items-baseline gap-4 w-full py-4 border-b border-[rgba(239,230,212,0.1)]"
            >
              <span className="tick text-signal">{item.n}</span>
              <span className="display text-3xl font-bold">{item.label}</span>
            </button>
          ))}
          <a
            href="/Muhammad_Muneeb_Resume.pdf"
            download
            className="block mt-8 tick text-signal"
          >
            Download CV ↓
          </a>
        </div>
      )}

      {/* Floating section index (desktop) */}
      <nav className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            title={item.label}
            className="group flex items-center justify-end gap-3"
          >
            <span
              className={`tick opacity-0 group-hover:opacity-100 transition-opacity ${
                active === item.id ? 'text-signal opacity-100' : 'text-sand'
              }`}
            >
              {item.label}
            </span>
            <span
              className={`block h-px transition-all ${
                active === item.id ? 'w-8 bg-signal' : 'w-4 bg-sand/40 group-hover:w-6'
              }`}
            />
          </button>
        ))}
      </nav>
    </>
  );
}
