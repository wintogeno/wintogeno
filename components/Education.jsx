export default function Education() {
  return (
    <section id="education" className="px-6 md:px-12 lg:px-16 py-24 border-t border-paper/10">
      <p className="section-index mb-3">05 — School</p>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <h2 className="lg:col-span-5 display text-5xl md:text-6xl font-extrabold tracking-tightest leading-[0.95]">
          Degree,
          <br />
          then production.
        </h2>
        <div className="lg:col-span-7 mark-corners p-8 md:p-12 border border-paper/15">
          <p className="tick text-signal mb-6">2019.09 — 2023.07</p>
          <p className="display text-3xl md:text-4xl font-bold">Bachelor of Science</p>
          <p className="text-2xl text-sand mt-1">Computer Science</p>
          <p className="mt-4 text-paper/80">Bahria University · Islamabad, Pakistan</p>
          <div className="mt-10 pt-8 border-t border-paper/10">
            <p className="tick text-sand mb-3">Filed note</p>
            <p className="text-sand leading-relaxed max-w-lg">
              Operational excellence through CI/CD — higher deployment frequency
              and lower operational cost on platforms that stay up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
