export default function WhatIDo() {
  const services = [
    {
      icon: '🚀',
      title: 'CI/CD Pipeline Design',
      desc: 'Automated delivery pipelines using Jenkins, GitLab CI, and Azure DevOps to minimize time-to-production.',
      color: '#06b6d4',
    },
    {
      icon: '☁️',
      title: 'Cloud Architecture',
      desc: 'Azure and AWS infrastructure design including networking, compute, storage, and high-availability setups.',
      color: '#8b5cf6',
    },
    {
      icon: '🐳',
      title: 'Kubernetes & Containers',
      desc: 'Production-grade Kubernetes cluster management, Helm deployments, and Istio service mesh configuration.',
      color: '#14b8a6',
    },
    {
      icon: '🏗️',
      title: 'Infrastructure as Code',
      desc: 'Reproducible environments using Terraform and Ansible for consistent, auditable infrastructure.',
      color: '#f59e0b',
    },
    {
      icon: '📊',
      title: 'Observability & Reliability',
      desc: 'Prometheus + Grafana monitoring, alerting, and SLO-based reliability engineering.',
      color: '#ec4899',
    },
    {
      icon: '🔒',
      title: 'DevSecOps',
      desc: 'RBAC, IAM, WAF, API management, and security controls embedded into every pipeline.',
      color: '#34d399',
    },
  ];

  return (
    <section id="what-i-do" className="card animate-fade-in-up delay-100">
      <h2 className="section-title">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {services.map((svc, i) => (
          <div
            key={i}
            className="group p-5 rounded-2xl border transition-all duration-400 hover:-translate-y-1 cursor-default"
            style={{
              background: `${svc.color}06`,
              borderColor: `${svc.color}20`,
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${svc.color}15` }}
            >
              {svc.icon}
            </div>
            <h3 className="font-bold text-slate-100 mb-2 text-sm">{svc.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
