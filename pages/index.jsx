import Head from 'next/head';
import Header from '@/components/Header';
import About from '@/components/About';
import WhatIDo from '@/components/WhatIDo';
import Work from '@/components/Work';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Muneeb — DevOps Engineer</title>
        <meta name="description" content="Muhammad Muneeb - Azure DevOps Engineer specializing in Kubernetes, CI/CD pipelines, cloud infrastructure, and operational excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Muhammad Muneeb — DevOps Engineer" />
        <meta property="og:description" content="Azure DevOps Engineer | Kubernetes Expert | Cloud Architecture | CI/CD Automation" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Background grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none" style={{ zIndex: 0 }} />

      <div className="relative min-h-screen flex flex-col" style={{ zIndex: 1 }}>
        <Header />

        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 space-y-8">
          <About />
          <WhatIDo />
          <Work />
          <Projects />
          <Skills />
          <Education />
          <Connect />
        </main>

        <Footer />
      </div>
    </>
  );
}
