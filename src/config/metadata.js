/**
 * SEO Metadata Configuration for LocalChain AI Splash Page
 *
 * Centralized metadata object for dynamic meta tags.
 * Used with react-helmet-async to inject SEO tags at runtime.
 */

const siteUrl = 'https://localchainai.com';
const ogImage = `${siteUrl}/og-image.png`;

export const metadata = {
  // Primary SEO fields
  title: 'LocalChain AI | Local-First Visual Workflow Orchestrator',
  description:
    'Build autonomous, local-first AI workflows with visual chain builder. Run parallel AI pipelines using local LLMs — open-source and developer-friendly.',

  // Keywords for search engines
  keywords: [
    'local-first AI workflow orchestrator',
    'visual workflow chains',
    'local LLM',
    'parallel AI workflows',
    'open-source AI orchestration',
    'LocalChain AI',
  ].join(', '),

  // Canonical URL
  canonical: siteUrl,

  // OpenGraph (Facebook / LinkedIn)
  og: {
    title: 'LocalChain AI | Local-First Visual Workflow Orchestrator',
    description:
      'Build autonomous, local-first AI workflows with visual chain builder. Run parallel AI pipelines using local LLMs — open-source and developer-friendly.',
    image: ogImage,
    url: siteUrl,
    type: 'website',
    siteName: 'LocalChain AI',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'LocalChain AI | Local-First Visual Workflow Orchestrator',
    description:
      'Build autonomous, local-first AI workflows with visual chain builder. Run parallel AI pipelines using local LLMs — open-source and developer-friendly.',
    image: ogImage,
    site: '@micdoty',
    creator: '@micdoty',
  },

  // Additional SEO signals
  robots: 'index, follow',
  author: 'LocalChain AI Team',
  themeColor: '#8B5CF6',

  // JSON-LD Structured Data (Schema.org)
  jsonLd: {
    softwareApplication: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'LocalChain AI',
      description:
        'Build autonomous, local-first AI workflows with visual chain builder. Run parallel AI pipelines using local LLMs — open-source and developer-friendly.',
      operatingSystem: 'macOS',
      applicationCategory: 'DeveloperApplication',
      url: siteUrl,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      author: {
        '@type': 'Organization',
        name: 'LocalChain AI Team',
        url: siteUrl,
      },
    },
  },
};
