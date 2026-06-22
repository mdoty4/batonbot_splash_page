const siteUrl = 'https://batonbot.io';
const ogImage = `${siteUrl}/og-image.png`;

const description =
  'BatonBot is the visual orchestrator for AI agent pipelines. Chain Aider, Cline, and local LLMs into repeatable, autonomous workflows — and let your computer work for you.';

export const metadata = {
  title: 'BatonBot | Visual Orchestrator for AI Agent Pipelines',
  description,
  keywords: [
    'BatonBot',
    'AI agent orchestrator',
    'visual AI workflow',
    'AI agent pipeline',
    'Aider orchestration',
    'Cline orchestration',
    'LM Studio',
    'local LLM agent',
    'Kanban AI workflow',
    'OpenAI compatible proxy',
    'agent chaining',
    'MCP agent server',
    'OpenClaw',
    'open source AI agent',
  ].join(', '),
  canonical: siteUrl,
  og: {
    title: 'BatonBot | Visual Orchestrator for AI Agent Pipelines',
    description,
    image: ogImage,
    url: siteUrl,
    type: 'website',
    siteName: 'BatonBot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BatonBot | Visual Orchestrator for AI Agent Pipelines',
    description,
    image: ogImage,
    site: '@micdoty',
    creator: '@micdoty',
  },
  robots: 'index, follow',
  author: 'Michael Doty',
  themeColor: '#8B5CF6',
  jsonLd: {
    softwareApplication: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'BatonBot',
      description,
      operatingSystem: 'macOS, Windows, Linux',
      applicationCategory: 'DeveloperApplication',
      url: siteUrl,
      license: 'https://opensource.org/licenses/MIT',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      author: {
        '@type': 'Person',
        name: 'Michael Doty',
        url: 'https://github.com/mdoty4',
      },
      sameAs: ['https://github.com/mdoty4/batonbot'],
    },
  },
};
