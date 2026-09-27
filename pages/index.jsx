import SEO from '@/components/SEO';
import Header from '@/components/Header';
import About from '@/components/About';
import WhatIDo from '@/components/WhatIDo';
import Work from '@/components/Work';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import DevOpsFAQ from '@/components/DevOpsFAQ';
import Education from '@/components/Education';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <SEO />

      {/* Glow orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      {/* Background grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true" />

      <div className="relative min-h-screen flex flex-col" style={{ zIndex: 1 }}>
        <Header />

        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 space-y-8" id="main-content">
          <About />
          <WhatIDo />
          <Work />
          <Projects />
          <Skills />
          <DevOpsFAQ />
          <Education />
          <Connect />
        </main>

        <Footer />
      </div>
    </>
  );
}
