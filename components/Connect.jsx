export default function Connect() {
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
  ];

  return (
    <section id="connect" className="card animate-fade-in-up delay-400">
      <h2 className="section-title">Get In Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Left: Message */}
        <div>
          <h3 className="text-2xl font-black text-slate-100 mb-4">
            Let&apos;s Build Something
            <span className="gradient-text"> Together</span>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            I&apos;m always excited to take on new challenges in cloud infrastructure, 
            DevOps automation, and scalable systems. Drop me a message and let&apos;s talk.
          </p>

          {/* Contact info */}
          <div className="space-y-4 mb-8">
            {[
              { icon: '📧', label: 'Email', value: 'muneebm361@gmail.com', href: 'mailto:muneebm361@gmail.com' },
              { icon: '📱', label: 'Phone', value: '+92 339 5153466', href: 'tel:+923395153466' },
              { icon: '📍', label: 'Location', value: 'Islamabad, Pakistan', href: null },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-slate-200 text-sm hover:text-cyan-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-slate-200 text-sm">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: social.gradient }}
              >
                {social.icon}
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: GitHub Stats */}
        <div
          className="p-5 rounded-2xl border"
          style={{ background: 'rgba(15,23,42,0.7)', borderColor: 'rgba(71,85,105,0.3)' }}
        >
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">GitHub Activity</h4>
          <div className="space-y-3">
            <img
              src="https://github-readme-stats.vercel.app/api?username=wintogeno&theme=transparent&hide_border=true&include_all_commits=true&count_private=true&title_color=06b6d4&text_color=94a3b8&icon_color=8b5cf6"
              alt="GitHub stats"
              className="rounded-xl w-full"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=wintogeno&theme=transparent&hide_border=true&layout=compact&title_color=06b6d4&text_color=94a3b8"
              alt="Top languages"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
