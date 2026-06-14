const skillGroups = [
  {
    title: 'Cloud & Platforms',
    icon: '☁️',
    color: '#06b6d4',
    items: [
      { name: 'Azure (DevOps, Blob, Front Door)', level: 90 },
      { name: 'AWS (ECS, VPC, S3)', level: 85 },
      { name: 'Linux Administration', level: 95 },
    ]
  },
  {
    title: 'Containers & Orchestration',
    icon: '⚙️',
    color: '#8b5cf6',
    items: [
      { name: 'Kubernetes', level: 92 },
      { name: 'Docker', level: 96 },
      { name: 'Istio Service Mesh', level: 80 },
    ]
  },
  {
    title: 'CI/CD & Automation',
    icon: '🔄',
    color: '#14b8a6',
    items: [
      { name: 'Jenkins', level: 90 },
      { name: 'Azure DevOps Pipelines', level: 90 },
      { name: 'GitLab CI', level: 85 },
    ]
  },
  {
    title: 'Infrastructure as Code',
    icon: '🏗️',
    color: '#f59e0b',
    items: [
      { name: 'Terraform', level: 90 },
      { name: 'Ansible', level: 85 },
    ]
  },
  {
    title: 'Monitoring & Observability',
    icon: '📊',
    color: '#ec4899',
    items: [
      { name: 'Prometheus', level: 85 },
      { name: 'Grafana', level: 88 },
    ]
  },
  {
    title: 'Networking & Security',
    icon: '🔒',
    color: '#34d399',
    items: [
      { name: 'Nginx / Apache / Proxy', level: 80 },
      { name: 'WAF / IAM / RBAC', level: 85 },
      { name: 'API Management', level: 82 },
    ]
  },
];

const allBadges = [
  'Ansible', 'Apache', 'AWS', 'Azure DevOps', 'Docker', 'Git',
  'GitHub', 'GitLab', 'Grafana', 'IAC', 'IAM', 'Jenkins',
  'Kubernetes', 'Linux', 'Microservices', 'Nginx', 'Prometheus',
  'Proxy', 'SQL', 'Terraform', 'VPC',
];

export default function Skills() {
  return (
    <section id="skills" className="card animate-fade-in-up delay-200">
      <h2 className="section-title">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl border transition-all duration-400 hover:-translate-y-1"
            style={{
              background: `${group.color}05`,
              borderColor: `${group.color}20`,
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                style={{ background: `${group.color}15` }}
              >
                {group.icon}
              </div>
              <h3 className="font-bold text-slate-100 text-sm">{group.title}</h3>
            </div>

            {/* Skills with bars */}
            <div className="space-y-3">
              {group.items.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-300">{skill.name}</span>
                    <span className="text-xs font-bold" style={{ color: group.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-slate-800">
                    <div
                      className="skill-bar"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${group.color}, ${group.color}99)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All skills as tags */}
      <div className="mt-10 pt-8 border-t border-slate-800">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Full Technology Stack</h3>
        <div className="flex flex-wrap gap-2">
          {allBadges.map((badge, i) => (
            <span key={i} className="skill-tag cursor-default">{badge}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
