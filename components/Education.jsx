export default function Education() {
  return (
    <section id="education" className="card animate-fade-in-up delay-300">
      <h2 className="section-title">Education</h2>

      <div className="mt-10 flex flex-col gap-6">
        {/* Degree */}
        <div
          className="relative p-6 rounded-2xl border overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.07), rgba(139,92,246,0.04))',
            borderColor: 'rgba(6,182,212,0.25)',
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
          />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex gap-5 items-center">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.1))' }}
              >
                🎓
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-100">Bachelor of Science</h3>
                <p className="gradient-text font-bold text-base">Computer Science</p>
                <p className="text-slate-400 text-sm mt-1">Bahria University • Islamabad, Pakistan</p>
              </div>
            </div>
            <div className="text-center shrink-0">
              <span
                className="text-sm font-mono text-slate-300 bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700 block"
              >
                Sep 2019 – Jul 2023
              </span>
            </div>
          </div>
        </div>

        {/* Key achievements during education */}
        <div
          className="p-5 rounded-2xl border"
          style={{
            background: 'rgba(15,23,42,0.6)',
            borderColor: 'rgba(71,85,105,0.3)',
          }}
        >
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">Skills Developed</h3>
          <div className="flex flex-wrap gap-2">
            {['Linux', 'Networking', 'Cloud Computing', 'Databases', 'Software Engineering', 'Security', 'Algorithms'].map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
