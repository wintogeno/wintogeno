const projects = [
  {
    n: '03',
    name: 'AKS + App Gateway',
    kicker: 'Cytomate platform',
    desc: 'Production and development AKS for SARAB, ASM, BreachPlus, and BattleTwin. Traffic lands on Azure Application Gateway (WAF). Gateway diagnostic logs, backend health probes, and APIM across dev, staging, and production.',
    tags: ['AKS', 'App Gateway', 'Health probes', 'Gateway logs', 'WAF', 'APIM'],
    wide: true,
  },
  {
    n: '02',
    name: 'Hub and Spoke GitOps',
    kicker: 'Delivery',
    desc: 'Hub and Spoke GitOps with Argo CD and FluxCD: a hub cluster drives spoke clusters through GitLab and Kustomize overlays. Same delivery shape on every cluster — promotions and rollbacks auditable from git.',
    tags: ['Hub and Spoke', 'Argo CD', 'FluxCD', 'GitLab', 'Kustomize'],
    wide: false,
  },
  {
    n: '01',
    name: 'ECS task defs & health',
    kicker: 'AWS platform',
    desc: 'Patient-portal on ECS: task definitions with container health checks, images in ECR, service autoscaling on Fargate. Target groups and security groups on the load balancer, health probes so only healthy tasks register. Aurora, ElastiCache, EFS, CloudFront — Terraform plus OIDC GitLab CI.',
    tags: ['ECS', 'Task definition', 'Health checks', 'Target groups', 'Security groups', 'ECR'],
    wide: false,
  },
  {
    n: '00',
    name: 'Jenkins & GitLab pipelines',
    kicker: 'Velocity',
    desc: 'Jenkins and GitLab CI (self-hosted runners) plus Azure DevOps: build, test, deploy, ACR/ECR push. Cut deploy time and release cycles. 20+ apps onto AWS ECS. Istio on Kubernetes. 99.99% availability.',
    tags: ['Jenkins', 'GitLab', 'Azure DevOps', 'ECS', 'ECR', 'Istio'],
    wide: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-16 py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="section-index mb-3">03 — Work</p>
          <h2 className="display text-5xl md:text-7xl font-extrabold tracking-tightest">
            Selected systems
          </h2>
        </div>
        <p className="max-w-sm text-sand text-sm">
          Platforms I built or still run — not demo repos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article
            key={p.n}
            className={`relative overflow-hidden border border-paper/10 bg-panel p-8 md:p-10 min-h-[280px] flex flex-col ${
              p.wide ? 'lg:col-span-2' : ''
            }`}
          >
            <div className="absolute -right-4 -top-8 display text-[140px] font-extrabold leading-none text-paper/[0.04] select-none">
              {p.n}
            </div>
            <div className="relative flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="tick text-signal">{p.kicker}</span>
                <span className="tick text-sand">{p.n}</span>
              </div>
              <h3 className="display text-3xl md:text-4xl font-bold tracking-tight mb-4">{p.name}</h3>
              <p className={`text-sand leading-relaxed mb-8 ${p.wide ? 'max-w-2xl' : ''}`}>{p.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tick border border-paper/15 px-3 py-1.5 text-sand">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
