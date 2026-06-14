export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800/50 mt-16 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-slate-900 text-xs"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
          >
            M
          </div>
          <p className="text-slate-500 text-sm">
            © {year} Muhammad Muneeb
          </p>
        </div>
        <p className="text-slate-600 text-xs text-center">
          DevOps Engineer · Kubernetes Expert · Cloud Infrastructure
        </p>
        <p className="text-slate-600 text-xs">
          Islamabad, Pakistan 🇵🇰
        </p>
      </div>
    </footer>
  );
}
