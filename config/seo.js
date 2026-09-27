/**
 * Global SEO Configuration for Muhammad Muneeb - Senior DevOps Engineer Portfolio
 * Optimized for high ranking across search engines (Google, Bing, Yahoo)
 * for queries including: "devops", "devops engineer", "azure devops engineer",
 * "aws devops engineer", "kubernetes specialist", "hire devops engineer", etc.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://muneebdevops.online';

export const seoConfig = {
  defaultTitle: 'Muhammad Muneeb — Senior DevOps Engineer | Azure, AWS, Kubernetes & CI/CD Specialist',
  titleTemplate: '%s | Muhammad Muneeb — DevOps Engineer',
  description:
    'Muhammad Muneeb is a results-driven Senior DevOps Engineer specializing in Azure, AWS, Kubernetes, CI/CD pipeline automation, Terraform, and Docker. Delivering 99.99% uptime and 50% faster deployments.',
  canonical: siteUrl,
  siteUrl: siteUrl,
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '8IPwnd6lKr0lS8NvgB0uMugUb4HgMKSmvOJ_T80ESw4',
  bingSiteVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
  author: 'Muhammad Muneeb',
  publisher: 'Muhammad Muneeb',
  jobTitle: 'Senior DevOps Engineer',
  location: {
    city: 'Islamabad',
    country: 'Pakistan',
    region: 'PK-IS',
    coordinates: {
      latitude: '33.6844',
      longitude: '73.0479',
    },
  },
  contact: {
    email: 'muneebm361@gmail.com',
    phone: '+92 339 5153466',
  },
  social: {
    github: 'https://github.com/wintogeno',
    linkedin: 'https://linkedin.com/in/muhammad-muneeb-4a46b5194',
    medium: 'https://medium.com/@muneem361',
  },
  keywords: [
    // Core search queries
    'DevOps',
    'DevOps Engineer',
    'Senior DevOps Engineer',
    'Lead DevOps Engineer',
    'Hire DevOps Engineer',
    'DevOps Consultant',
    'DevOps Specialist',
    'DevOps Portfolio',
    'DevOps Engineer Portfolio',
    'Freelance DevOps Engineer',
    'Remote DevOps Engineer',
    // Cloud platforms
    'Azure DevOps Engineer',
    'AWS DevOps Engineer',
    'Cloud DevOps Engineer',
    'Cloud Architect',
    'Cloud Infrastructure Engineer',
    'Multi Cloud Engineer',
    'Azure Cloud Solutions',
    'AWS Solutions',
    // Containerization & Orchestration
    'Kubernetes Expert',
    'Kubernetes Administrator',
    'Docker Specialist',
    'Container Orchestration',
    'Istio Service Mesh',
    'Helm Charts',
    'Argo CD',
    // Automation & CI/CD
    'CI/CD Pipeline Automation',
    'CI/CD Specialist',
    'Jenkins Pipeline Expert',
    'GitLab CI/CD',
    'GitHub Actions',
    'Continuous Integration',
    'Continuous Deployment',
    // Infrastructure as Code
    'Infrastructure as Code',
    'IaC',
    'Terraform Specialist',
    'Ansible Automation',
    'Bash Scripting',
    'Python Automation',
    // Observability & Reliability
    'Site Reliability Engineer',
    'SRE',
    'Prometheus Monitoring',
    'Grafana Dashboards',
    'DevSecOps Engineer',
    'Cloud Security',
    'RBAC & IAM Security',
    // Branded & Geographic
    'Muhammad Muneeb',
    'Muhammad Muneeb DevOps',
    'muneebdevops',
    'muneebdevops.online',
    'muneeb devops engineer',
    'wintogeno',
    'DevOps Engineer Islamabad',
    'DevOps Engineer Pakistan',
  ],
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Muhammad Muneeb — DevOps Engineer Portfolio',
    title: 'Muhammad Muneeb — Senior DevOps Engineer | Azure, AWS, Kubernetes',
    description:
      'Senior DevOps Engineer with 3+ years experience delivering 99.99% uptime, 50% faster deployments, and enterprise cloud migrations across Azure, AWS, and Kubernetes.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Muhammad Muneeb - Senior DevOps Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Muneeb — Senior DevOps Engineer | Cloud & CI/CD Specialist',
    description:
      'Specializing in Azure DevOps, AWS, Kubernetes, Terraform, Docker, and enterprise cloud architectures. 99.99% uptime delivered.',
    image: `${siteUrl}/og-image.png`,
    creator: '@wintogeno',
  },
};

/**
 * FAQ Schema items for rich snippet Google indexing (People Also Ask / Featured Snippets)
 */
export const devopsFaqs = [
  {
    question: 'Who is Muhammad Muneeb and what are his DevOps qualifications?',
    answer:
      'Muhammad Muneeb is a Senior DevOps Engineer and Cloud Architect with over 3 years of hands-on experience designing CI/CD pipelines, orchestrating Kubernetes clusters, and migrating production workloads to Azure and AWS with 99.99% uptime.',
  },
  {
    question: 'What core DevOps and cloud technologies does Muhammad Muneeb specialize in?',
    answer:
      'He specializes in Azure DevOps, AWS (ECS, VPC, S3), Kubernetes, Docker, Terraform, Ansible, Jenkins, GitLab CI, GitHub Actions, Prometheus, Grafana, Istio Service Mesh, and Linux Administration.',
  },
  {
    question: 'How can I hire Muhammad Muneeb for DevOps engineering or consulting?',
    answer:
      'You can reach Muhammad Muneeb directly via email at muneebm361@gmail.com, telephone at +92 339 5153466, or connect on LinkedIn (linkedin.com/in/muhammad-muneeb-4a46b5194) and GitHub (github.com/wintogeno). He is available for full-time, contract, and remote DevOps opportunities.',
  },
  {
    question: 'What results has Muhammad Muneeb achieved in DevOps and Cloud migrations?',
    answer:
      'Achievements include cutting deployment release cycles by 40-50%, migrating 20+ enterprise applications to AWS with 99.99% availability, reducing infrastructure costs by 30% through Infrastructure as Code (IaC), and managing over 200 TB of business data securely on Azure.',
  },
  {
    question: 'What DevOps services are offered?',
    answer:
      'Services include CI/CD Pipeline Automation, Cloud Architecture & Migration (Azure & AWS), Kubernetes & Container Orchestration, Infrastructure as Code (Terraform & Ansible), Monitoring & Observability (Prometheus & Grafana), and DevSecOps compliance.',
  },
];

/**
 * Generates Schema.org JSON-LD structured data graph for Google Knowledge Graph
 */
export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Person Entity (DevOps Engineer)
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Muhammad Muneeb',
        givenName: 'Muhammad',
        familyName: 'Muneeb',
        jobTitle: 'Senior DevOps Engineer',
        description: seoConfig.description,
        url: siteUrl,
        email: seoConfig.contact.email,
        telephone: seoConfig.contact.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Islamabad',
          addressCountry: 'PK',
        },
        sameAs: [
          seoConfig.social.linkedin,
          seoConfig.social.github,
          seoConfig.social.medium,
        ],
        knowsAbout: [
          'DevOps',
          'DevOps Engineering',
          'Cloud Computing',
          'Kubernetes',
          'Docker Containerization',
          'CI/CD Pipeline Automation',
          'Microsoft Azure',
          'Azure DevOps',
          'Amazon Web Services (AWS)',
          'Terraform',
          'Ansible',
          'Jenkins',
          'GitLab CI',
          'GitHub Actions',
          'Linux System Administration',
          'Site Reliability Engineering (SRE)',
          'DevSecOps',
          'Prometheus & Grafana Monitoring',
          'Istio Service Mesh',
          'Infrastructure as Code (IaC)',
        ],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Comsats University Islamabad',
        },
        hasOccupation: {
          '@type': 'Occupation',
          name: 'DevOps Engineer',
          occupationalCategory: '15-1254.00',
          skills: 'Kubernetes, Azure DevOps, AWS, CI/CD, Terraform, Docker, Linux, DevSecOps',
        },
      },

      // 2. Profile Page Schema
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: 'Muhammad Muneeb — Senior DevOps Engineer Portfolio',
        description: seoConfig.description,
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          name: 'Muhammad Muneeb — DevOps Engineer Portfolio',
          url: siteUrl,
          publisher: {
            '@id': `${siteUrl}/#person`,
          },
        },
        about: {
          '@id': `${siteUrl}/#person`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${siteUrl}/og-image.png`,
        },
        inLanguage: 'en-US',
      },

      // 3. WebSite Entity
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Muhammad Muneeb DevOps Portfolio',
        description: 'Official portfolio and resume of Senior DevOps Engineer Muhammad Muneeb.',
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
        inLanguage: 'en-US',
      },

      // 4. FAQ Schema for Rich Google SERP Snippets
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: devopsFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },

      // 5. BreadcrumbList Schema for Google Search Hierarchy Snippets
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About Senior DevOps Engineer',
            item: `${siteUrl}/#about`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'DevOps Experience',
            item: `${siteUrl}/#work`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Key Cloud & DevOps Projects',
            item: `${siteUrl}/#projects`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Technical Skills & Tools',
            item: `${siteUrl}/#skills`,
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'DevOps Engineering FAQ',
            item: `${siteUrl}/#faq`,
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'Hire & Contact',
            item: `${siteUrl}/#connect`,
          },
        ],
      },

      // 6. Professional Service Schema
      {
        '@type': 'Service',
        '@id': `${siteUrl}/#service-devops`,
        name: 'DevOps & Cloud Engineering Services',
        provider: {
          '@id': `${siteUrl}/#person`,
        },
        serviceType: 'DevOps Consulting & Cloud Architecture',
        areaServed: 'Worldwide',
        description:
          'Comprehensive DevOps services including Azure & AWS Cloud Architecture, CI/CD Pipeline Automation, Kubernetes Orchestration, Terraform Infrastructure as Code, and Prometheus/Grafana Monitoring.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'DevOps Services Catalog',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'CI/CD Pipeline Automation',
                description: 'Build automated delivery pipelines using Jenkins, GitLab CI, Azure DevOps, and GitHub Actions.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Azure & AWS Cloud Architecture',
                description: 'Enterprise cloud migration, VPC/Blob/FrontDoor setup, cost optimization, and 99.99% availability design.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Kubernetes & Docker Orchestration',
                description: 'Production-grade K8s cluster setup, Helm deployments, Istio service mesh, and container security.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Infrastructure as Code (IaC)',
                description: 'Declarative, reproducible infrastructure using Terraform modules, Ansible playbooks, and GitOps.',
              },
            },
          ],
        },
      },
    ],
  };
}

