export default function Connect() {
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
      </div>
    </section>
  );
}
