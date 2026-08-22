const experiences = [
  {
    n: '03',
    title: 'DevOps Engineer',
    company: 'Cytomate',
    loc: 'Remote',
    period: 'Mar 2025 — Present',
    blurb: 'Own production and development AKS for Cytomate’s cybersecurity products.',
    points: [
      'AKS for SARAB, ASM, BreachPlus, and BattleTwin — high availability, zero-downtime releases.',
      'WAF-enabled Application Gateway with diagnostic/access logs and backend health probes across dev, staging, and production.',
      'APIM: rate-limiting, IP filtering, authentication for multi-tenant APIs.',
      'Azure DevOps + GitLab (self-hosted runners), ACR, staging slots, secret injection.',
      'Function Apps, Azure AI Foundry (Mistral), containerized embeddings.',
      'Implemented a Hub and Spoke GitOps model with FluxCD and Kustomize overlays for consistent, auditable multi-cluster delivery.',
      'AWS patient portal via Terraform: ECS task definitions, container health checks, target groups, security groups, load-balancer probes, Fargate, Aurora, ElastiCache, EFS, CloudFront, OIDC GitLab CI.',
      'Wildcard TLS, Entra ID, Conditional Access, RBAC. Multi-subscription cost audit.',
    ],
  },
  {
    n: '02',
    title: 'Azure DevOps Engineer',
    company: 'Micromerger',
    loc: 'Islamabad',
    period: 'Dec 2024 — Apr 2025',
    blurb: 'Cloud and DevOps delivery for large-scale Azure estates.',
    points: [
      'Azure Blob for 200 TB — 30% storage cost reduction.',
      'Service Principal + RBAC for CI/CD automation.',
      'Azure DevOps pipelines — 40% shorter release cycles.',
      'APIM policies and Azure Front Door (WAF, SSL offload, routing).',
      'Azure AI Foundry experiments on microservices.',
      'Jenkins pipeline: 50% faster deploys, 75% higher frequency.',
      'IaC: 30% infra cost down, 20% reliability up.',
      'Kubernetes as GitLab Runner. Istio on the mesh.',
      '20+ apps to AWS ECS/Docker — 99.99% availability, 30% cost cut.',
      'Commendation for VPC and peering recovery.',
    ],
  },
  
  {
    n: '01',
    title: 'DevOps Engineer',
    company: 'WideAchor Group',
    loc: 'Remote',
    period: 'Nov 2023 — Oct 2024',
    blurb: 'Remote DevOps and cloud infrastructure for distributed teams.',
    points: [
      'CI/CD for build, test, and deploy.',
      'Terraform and Ansible for infrastructure.',
      'Monitoring and logging: Application Gateway logs, health probes, target groups, security groups, and ECS task health.',
      'Docker/Kubernetes containerization and DevSecOps habits.',
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="paper-grid text-ink">
      <div className="px-6 md:px-12 lg:px-16 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal mb-3">02 — Log</p>
            <h2 className="display text-5xl md:text-7xl font-extrabold tracking-tightest">
              Changelog
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[11px] uppercase tracking-widest text-ink/50">
            Reverse chronological · as filed
          </p>
        </div>

        <div className="space-y-0 border-t border-ink/15">
          {experiences.map((exp) => (
            <article
              key={exp.n + exp.company + exp.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-12 border-b border-ink/15"
            >
              <div className="lg:col-span-3">
                <p className="display text-5xl font-extrabold text-signal leading-none">{exp.n}</p>
                <p className="font-mono text-[11px] mt-4 tracking-widest uppercase">{exp.period}</p>
                <p className="font-mono text-[11px] mt-1 text-ink/50 uppercase tracking-widest">{exp.loc}</p>
              </div>
              <div className="lg:col-span-9">
                <p className="display text-3xl md:text-4xl font-bold tracking-tight">
                  {exp.title}
                </p>
                <p className="mt-1 text-lg font-medium text-ink/70">{exp.company}</p>
                <p className="mt-4 italic text-ink/60">{exp.blurb}</p>
                <ul className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="text-sm leading-relaxed pl-4 border-l-2 border-signal/40">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
