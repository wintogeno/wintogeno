const services = [
  {
    n: 'A1',
    title: 'AKS & Kubernetes',
    desc: 'Production and development clusters, rolling updates, zero-downtime releases across product lines.',
  },
  {
    n: 'A2',
    title: 'CI/CD & GitOps',
      desc: 'Azure DevOps, GitLab self-hosted runners, and a Hub and Spoke GitOps model with FluxCD, Argo CD, and Kustomize overlays.',
  },
  {
    n: 'A3',
    title: 'Secure ingress',
    desc: 'Application Gateway with WAF, load balancers, APIM rate-limits, IP filters, and tenant auth.',
  },
  {
    n: 'A4',
    title: 'Infrastructure as code',
    desc: 'Terraform for Azure and AWS — ECS Fargate, Aurora, ElastiCache, EFS, CloudFront — plus Ansible.',
  },
  {
    n: 'A5',
    title: 'AI & serverless',
    desc: 'Function Apps, Azure AI Foundry with Mistral, containerized embedding services on the product path.',
  },
  {
    n: 'A6',
    title: 'Monitoring & health',
    desc: 'Application Gateway diagnostic and access logs. Target groups, security groups, and health probes on the load balancer. ECS task definitions with container health checks so only healthy tasks take traffic. Prometheus and Grafana on the clusters.',
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="px-6 md:px-12 lg:px-16 py-24 border-t border-paper/10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="section-index mb-3">Capabilities</p>
          <h2 className="display text-5xl md:text-7xl font-extrabold tracking-tightest">
            What I run
          </h2>
        </div>
        <p className="max-w-sm text-sand text-sm leading-relaxed">
          Not a service menu. These are the systems I actually operate — clusters,
          pipelines, edges, and the identity layer around them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t border-l border-paper/10">
        {services.map((s) => (
          <article
            key={s.n}
            className="group p-8 border-r border-b border-paper/10 hover:bg-paper hover:text-ink transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-10">
              <span className="tick text-signal group-hover:text-ink">{s.n}</span>
              <span className="tick opacity-0 group-hover:opacity-100">active</span>
            </div>
            <h3 className="display text-2xl font-bold mb-3 tracking-tight">{s.title}</h3>
            <p className="text-sm leading-relaxed text-sand group-hover:text-ink/70">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
