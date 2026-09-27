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
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_NAME } from '@/lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  jobTitle: 'DevOps Engineer',
  url: SITE_URL,
  email: 'mailto:muneebm361@gmail.com',
  telephone: '+923395153466',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://linkedin.com/in/muhammad-muneeb-4a46b5194',
    'https://github.com/wintogeno',
  ],
};

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="author" content={SITE_NAME} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0b0c0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate" type="application/pdf" href={`${SITE_URL}/Muhammad_Muneeb_Resume.pdf`} />

        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="muneebdevops.online" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="grain" />
      <div className="fixed inset-0 blueprint pointer-events-none z-0" />

      <Header />
=======
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
>>>>>>> 022ea07 (Update deployment configuration for Production)

      <div className="relative z-10 md:pl-[72px]">
        <About />
        <WhatIDo />
        <Work />
        <Projects />
        <Skills />
        <Education />
        <Connect />
        <Footer />
      </div>
    </>
  );
}
