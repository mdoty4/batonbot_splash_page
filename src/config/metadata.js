const siteUrl = 'https://batonbot.io';
const ogImage = `${siteUrl}/og-image.png`;

export const metadata = {
  title: 'Batonbot | Local AI Agent Orchestrator',
  description:
    'Describe any task. Choose your agents. Set the order. Batonbot AI agents complete real work — locally, openly, on your terms.',
  keywords: [
    'local AI agent orchestrator',
    'AI task automation',
    'local LLM agents',
    'AI workflow orchestration',
    'open-source AI agent',
    'Batonbot',
  ].join(', '),
  canonical: siteUrl,
  og: {
    title: 'Batonbot | Local AI Agent Orchestrator',
    description:
      'Describe any task. Choose your agents. Set the order. Batonbot AI agents complete real work — locally, openly, on your terms.',
    image: ogImage,
    url: siteUrl,
    type: 'website',
    siteName: 'Batonbot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batonbot | Local AI Agent Orchestrator',
    description:
      'Describe any task. Choose your agents. Set the order. Batonbot AI agents complete real work — locally, openly, on your terms.',
    image: ogImage,
    site: '@micdoty',
    creator: '@micdoty',
  },
  robots: 'index, follow',
  author: 'Batonbot Team',
  themeColor: '#8B5CF6',
  jsonLd: {
    softwareApplication: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Batonbot',
      description:
        'Describe any task. Choose your agents. Set the order. Batonbot AI agents complete real work — locally, openly, on your terms.',
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
        name: 'Batonbot Team',
        url: siteUrl,
      },
    },
  },
};