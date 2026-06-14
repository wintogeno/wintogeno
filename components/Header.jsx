'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'connect', label: 'Contact' },
  ];

  return (
    <header
      style={{
        borderBottom: scrolled ? '1px solid rgba(6,182,212,0.15)' : '1px solid transparent',
        background: scrolled ? 'rgba(3,7,18,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease',
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-slate-900 text-lg"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
          >
            M
          </div>
          <div>
            <p className="font-bold text-slate-100 leading-none text-sm">Muhammad Muneeb</p>
            <p className="text-[10px] text-cyan-400 font-medium tracking-widest uppercase mt-0.5">
              DevOps Engineer
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'text-cyan-400' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA button */}
        <a
          href="mailto:muneebm361@gmail.com"
          className="hidden md:block gradient-border-btn"
          style={{ fontSize: '13px', padding: '9px 24px' }}
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className="block w-5 h-0.5 bg-cyan-400 transition-all"
            style={{ transform: mobileOpen ? 'rotate(45deg) translateY(8px)' : '' }}
          />
          <span
            className="block w-5 h-0.5 bg-cyan-400 transition-all"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 bg-cyan-400 transition-all"
            style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-8px)' : '' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-slate-300 hover:text-cyan-400 font-medium transition-colors py-1"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
