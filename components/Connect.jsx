export default function Connect() {
<<<<<<< HEAD
=======
  const socials = [
    {
      label: 'LinkedIn',
      handle: 'muhammad-muneeb',
      href: 'https://linkedin.com/in/muhammad-muneeb-4a46b5194',
      gradient: 'linear-gradient(135deg, #0077b5, #00a0dc)',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      label: 'GitHub',
      handle: 'wintogeno',
      href: 'https://github.com/wintogeno',
      gradient: 'linear-gradient(135deg, #24292e, #4c566a)',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      label: 'Medium',
      handle: '@muneem361',
      href: 'https://medium.com/@muneem361',
      gradient: 'linear-gradient(135deg, #12100e, #292929)',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      )
    },
  ];

>>>>>>> 022ea07 (Update deployment configuration for Production)
  return (
    <section id="connect" className="px-6 md:px-12 lg:px-16 py-24 border-t border-paper/10">
      <p className="section-index mb-6">06 — Ping</p>
      <h2 className="display text-5xl md:text-[7.5vw] font-extrabold tracking-tightest leading-[0.9] max-w-5xl">
        If the cluster is on fire,
        <span className="text-signal"> I already have a pager.</span>
      </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
        <a
          href="mailto:muneebm361@gmail.com"
          className="bg-ink p-8 hover:bg-signal hover:text-paper transition-colors group"
        >
<<<<<<< HEAD
          <p className="tick text-sand group-hover:text-paper/80 mb-8">Email</p>
          <p className="display text-2xl font-bold break-all">muneebm361@gmail.com</p>
        </a>
        <a
          href="tel:+923395153466"
          className="bg-ink p-8 hover:bg-paper hover:text-ink transition-colors group"
        >
          <p className="tick mb-8 text-sand group-hover:text-ink/50">Phone</p>
          <p className="display text-2xl font-bold">+92 339 5153466</p>
        </a>
        <a
          href="https://linkedin.com/in/muhammad-muneeb-4a46b5194"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink p-8 hover:bg-mint hover:text-ink transition-colors group"
        >
          <p className="tick mb-8 text-sand group-hover:text-ink/50">LinkedIn</p>
          <p className="display text-2xl font-bold">muhammad-muneeb</p>
        </a>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="https://muneebdevops.online"
          className="tick border border-paper/15 px-5 py-3 hover:border-signal hover:text-signal"
        >
          muneebdevops.online
        </a>
        <a
          href="https://github.com/wintogeno"
          target="_blank"
          rel="noopener noreferrer"
          className="tick border border-paper/15 px-5 py-3 hover:border-signal hover:text-signal"
        >
          GitHub / wintogeno
        </a>
        <a
          href="/Muhammad_Muneeb_Resume.pdf"
          download
          className="tick bg-paper text-ink px-5 py-3 hover:bg-signal hover:text-paper"
        >
          Download CV
        </a>
=======
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">GitHub Activity</h4>
          <div className="space-y-3">
            <img
              src="https://github-readme-stats.vercel.app/api?username=wintogeno&theme=transparent&hide_border=true&include_all_commits=true&count_private=true&title_color=06b6d4&text_color=94a3b8&icon_color=8b5cf6"
              alt="Muhammad Muneeb GitHub DevOps Statistics and Commit Activity"
              loading="lazy"
              width="495"
              height="195"
              className="rounded-xl w-full"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=wintogeno&theme=transparent&hide_border=true&layout=compact&title_color=06b6d4&text_color=94a3b8"
              alt="Muhammad Muneeb Top DevOps Technologies and Programming Languages"
              loading="lazy"
              width="495"
              height="195"
              className="rounded-xl w-full"
            />
          </div>
        </div>
>>>>>>> 022ea07 (Update deployment configuration for Production)
      </div>
    </section>
  );
}
