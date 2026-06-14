const projects = [
  {
    number: '01',
    name: 'CI/CD Pipeline Automation',
    description: 'Architected high-performance multi-stage delivery pipelines across Jenkins and Azure DevOps, dramatically improving engineering velocity.',
    metrics: [
      { label: 'Faster Deployments', value: '50%' },
      { label: 'Release Frequency', value: '+75%' },
      { label: 'Release Cycle Cut', value: '40%' },
    ],
    tags: ['Jenkins', 'Azure DevOps', 'Istio', 'Kubernetes', 'GitLab CI'],
    gradient: 'linear-gradient(135deg, #06b6d490 0%, #0ea5e940 100%)',
    border: '#06b6d430',
    glow: 'rgba(6,182,212,0.08)',
  },
  {
    number: '02',
    name: 'Cloud Migration & IaC',
    description: 'Led end-to-end migration of 20+ applications to AWS using Docker and ECS. Delivered significant cost savings and near-perfect uptime.',
    metrics: [
      { label: 'Apps Migrated', value: '20+' },
      { label: 'Cost Reduction', value: '30%' },
      { label: 'Availability', value: '99.99%' },
    ],
    tags: ['AWS', 'ECS', 'Terraform', 'Docker', 'Ansible'],
    gradient: 'linear-gradient(135deg, #8b5cf690 0%, #a78bfa40 100%)',
    border: '#8b5cf630',
    glow: 'rgba(139,92,246,0.08)',
  },
  {
    number: '03',
    name: 'Azure Blob & Global CDN',
    description: 'Integrated 200 TB of enterprise blob storage, and deployed Azure Front Door with WAF for global performance and enterprise-grade security.',
    metrics: [
      { label: 'Data Managed', value: '200 TB' },
      { label: 'Cost Reduction', value: '30%' },
      { label: 'Global CDN', value: 'Active' },
    ],
    tags: ['Azure Blob', 'Front Door', 'WAF', 'API Management', 'SSL'],
    gradient: 'linear-gradient(135deg, #14b8a690 0%, #0d948440 100%)',
    border: '#14b8a630',
    glow: 'rgba(20,184,166,0.08)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="card animate-fade-in-up delay-200">
      <h2 className="section-title">Key Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative p-6 rounded-2xl transition-all duration-500 flex flex-col"
            style={{
              background: `linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.7))`,
              border: `1px solid ${project.border}`,
              boxShadow: `0 0 0px ${project.glow}`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 20px 60px ${project.glow}`;
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = `0 0 0px ${project.glow}`;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Project number */}
            <div
              className="text-5xl font-black mb-4 opacity-10 select-none"
              style={{ background: project.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              {project.number}
            </div>

            <h3 className="text-lg font-bold text-slate-100 mb-3">{project.name}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{project.description}</p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 mb-5 py-4 border-y border-slate-800">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-lg font-black"
                    style={{ background: project.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    {m.value}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span key={i} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
