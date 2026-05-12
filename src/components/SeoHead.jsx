import { Helmet } from 'react-helmet-async';
import { metadata } from '../config/metadata';

/**
 * SeoHead component injects all SEO-related meta tags into <head>.
 * Reusable across any page; defaults to the global metadata config.
 */
export function SeoHead() {
  return (
    <Helmet>
      {/* Primary Title & Description */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />

      {/* Robots */}
      <meta name="robots" content={metadata.robots} />
      <meta name="author" content={metadata.author} />

      {/* Canonical URL */}
      <link rel="canonical" href={metadata.canonical} />

      {/* Theme Color (mobile browsers) */}
      <meta name="theme-color" content={metadata.themeColor} />

      {/* ---------- OpenGraph (Facebook / LinkedIn) ---------- */}
      <meta property="og:title" content={metadata.og.title} />
      <meta property="og:description" content={metadata.og.description} />
      <meta property="og:image" content={metadata.og.image} />
      <meta property="og:image:alt" content="AI agent orchestrator — Batonbot completes real work, locally" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={metadata.og.url} />
      <meta property="og:type" content={metadata.og.type} />
      <meta property="og:site_name" content={metadata.og.siteName} />

      {/* ---------- Twitter Card ---------- */}
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.image} />
      <meta name="twitter:image:alt" content="AI agent orchestrator — Batonbot completes real work, locally" />
      <meta name="twitter:site" content={metadata.twitter.site} />
      <meta name="twitter:creator" content={metadata.twitter.creator} />

      {/* ---------- JSON-LD Structured Data ---------- */}
      <script type="application/ld+json">
        {JSON.stringify(metadata.jsonLd.softwareApplication)}
      </script>
    </Helmet>
  );
}
