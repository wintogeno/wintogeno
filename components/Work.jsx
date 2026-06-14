const experiences = [
  {
    title: 'Azure DevOps Engineer',
    company: 'Micromerger',
    location: 'Islamabad, Pakistan',
    period: 'Dec 2023 – Present',
    type: 'Full-Time',
    description: 'A technology company focusing on cloud and DevOps solutions',
    color: '#06b6d4',
    highlights: [
      'Reduced Azure Blob Storage costs by <strong>30%</strong> managing 200 TB of business data securely',
      'Reduced release cycle time by <strong>40%</strong> via Azure DevOps Pipelines',
      'Implemented RBAC via Azure Service Principal for secure CI/CD workflows',
      'Integrated Azure Front Door with WAF, SSL offloading and intelligent routing',
      'Explored Azure AI Foundry for integrating AI into microservices applications',
    ]
  },
  {
    title: 'DevOps Engineer',
    company: 'Micromerger',
    location: 'Islamabad, Pakistan',
    period: 'Dec 2023 – Dec 2024',
    type: 'Full-Time',
    description: 'Platform engineering and Kubernetes cluster management at scale',
    color: '#8b5cf6',
    highlights: [
      'Designed Jenkins pipelines reducing deployment time by <strong>50%</strong> and frequency by <strong>75%</strong>',
      'Migrated 20+ applications to AWS (ECS/Docker), achieving <strong>99.99%</strong> availability',
      'Reduced infrastructure costs by <strong>30%</strong> via IaC implementation',
      'Integrated Kubernetes as GitLab Runner for enhanced build scalability',
      'Enhanced Kubernetes security and availability using Istio service mesh',
    ]
  },
  {
    title: 'DevOps Engineer',
    company: 'WideAchor Group',
    location: 'Remote',
    period: 'Nov 2022 – Oct 2024',
    type: 'Remote',
    description: 'End-to-end DevOps and cloud infrastructure for distributed teams',
    color: '#14b8a6',
    highlights: [
      'Designed and maintained CI/CD pipelines for automated build, test, and deployment',
      'Configured infrastructure as code using Terraform and Ansible',
      'Implemented Prometheus/Grafana monitoring and anomaly detection',
      'Supported containerization using Docker and Kubernetes',
      'Enforced DevSecOps best practices across all pipelines',
    ]
  }
];

export default function Work() {
  return (
    <section id="work" className="card animate-fade-in-up delay-100">
      <h2 className="section-title">Experience</h2>

      <div className="relative mt-10">
        {/* Timeline line */}
        <div className="timeline-line" />

        <div className="space-y-12 pl-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div
                className="timeline-dot"
                style={{ borderColor: exp.color, boxShadow: `0 0 14px ${exp.color}88` }}
              />

              <div
                className="p-6 rounded-2xl border transition-all duration-400 group-hover:translate-x-1"
                style={{
                  background: `linear-gradient(135deg, ${exp.color}08, transparent)`,
                  borderColor: `${exp.color}22`,
                }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: exp.color }}
                    >
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-slate-100 font-semibold">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-400">{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className="text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider"
                      style={{ background: `${exp.color}22`, color: exp.color }}
                    >
                      {exp.type}
                    </span>
                    <span className="text-sm font-mono text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-400 italic mb-4">{exp.description}</p>

                <ul className="space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-slate-300">
                      <span style={{ color: exp.color }} className="shrink-0 mt-0.5">▹</span>
                      <span dangerouslySetInnerHTML={{ __html: h }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
