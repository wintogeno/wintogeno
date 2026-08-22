const rowA = [
  'AKS', 'Kubernetes', 'Docker', 'Argo CD', 'FluxCD', 'Kustomize', 'Istio',
  'Azure DevOps', 'GitLab CI', 'Jenkins', 'ACR', 'ECR', 'Helm',
];
const rowB = [
  'Terraform', 'Ansible', 'AWS', 'ECS', 'ECR', 'Autoscaling', 'Aurora', 'CloudFront',
  'APIM', 'App Gateway', 'Entra ID', 'WAF', 'TLS',
];
const rowC = [
  'Prometheus', 'Grafana', 'App Gateway logs', 'Health probes', 'Target groups',
  'Security groups', 'ECS health', 'Linux', 'Nginx', 'IAM',
];

const groups = [
  { title: 'Orchestration', items: ['Kubernetes / AKS', 'ECS / ECR', 'Task definitions', 'Autoscaling'] },
  { title: 'Delivery', items: ['Hub and Spoke', 'Argo CD', 'FluxCD', 'GitLab CI'] },
  { title: 'Monitoring', items: ['Grafana', 'Prometheus', 'Application Insights'] },
  { title: 'Network & edge', items: ['App Gateway', 'Security groups', 'WAF', 'APIM'] },
];

export default function Skills() {
  const Row = ({ items, reverse }) => (
    <div className="overflow-hidden border-y border-paper/10 py-4">
      <div className={`marquee-track flex w-max gap-10 ${reverse ? '[animation-direction:reverse]' : ''}`}>
        {[...items, ...items].map((item, i) => (
          <span key={item + i} className="display text-4xl md:text-6xl font-extrabold tracking-tight whitespace-nowrap">
            {item}
            <span className="text-signal mx-6">/</span>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24">
      <div className="px-6 md:px-12 lg:px-16 mb-12">
        <p className="section-index mb-3">04 — Stack</p>
        <h2 className="display text-5xl md:text-7xl font-extrabold tracking-tightest">
          Tools I keep sharp
        </h2>
      </div>

      <Row items={rowA} />
      <Row items={rowB} reverse />
      <Row items={rowC} />

      <div className="px-6 md:px-12 lg:px-16 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10">
        {groups.map((g) => (
          <div key={g.title} className="bg-ink p-8">
            <p className="tick text-signal mb-6">{g.title}</p>
            <ul className="space-y-2">
              {g.items.map((i) => (
                <li key={i} className="text-lg font-medium">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}