import Head from 'next/head';
import { seoConfig, generateStructuredData } from '@/config/seo';

export default function SEO({
  title = seoConfig.defaultTitle,
  description = seoConfig.description,
  canonical = seoConfig.canonical,
  ogImage = seoConfig.openGraph.images[0].url,
  keywords = seoConfig.keywords,
  googleSiteVerification = seoConfig.googleSiteVerification,
  bingSiteVerification = seoConfig.bingSiteVerification,
}) {
  const structuredData = generateStructuredData();
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  return (
    <Head>
      {/* Search Engine Site Verification */}
      {googleSiteVerification && (
        <meta name="google-site-verification" content={googleSiteVerification} />
      )}
      {bingSiteVerification && (
        <meta name="msvalidate.01" content={bingSiteVerification} />
      )}

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={seoConfig.author} />
      <meta name="creator" content={seoConfig.author} />
      <meta name="publisher" content={seoConfig.publisher} />
      <meta name="application-name" content="Muhammad Muneeb DevOps Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />

      {/* Crawlers & Indexing Directives */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Geographic Meta Tags (Local & Global SEO) */}
      <meta name="geo.region" content={seoConfig.location.region} />
      <meta name="geo.placename" content={seoConfig.location.city} />
      <meta
        name="geo.position"
        content={`${seoConfig.location.coordinates.latitude};${seoConfig.location.coordinates.longitude}`}
      />
      <meta
        name="ICBM"
        content={`${seoConfig.location.coordinates.latitude}, ${seoConfig.location.coordinates.longitude}`}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seoConfig.openGraph.type} />
      <meta property="og:locale" content={seoConfig.openGraph.locale} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={seoConfig.openGraph.title} />
      <meta property="og:description" content={seoConfig.openGraph.description} />
      <meta property="og:site_name" content={seoConfig.openGraph.siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Muhammad Muneeb - Senior DevOps Engineer" />
      <meta property="og:image:type" content="image/png" />
      <meta property="profile:first_name" content="Muhammad" />
      <meta property="profile:last_name" content="Muneeb" />
      <meta property="profile:username" content="wintogeno" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={seoConfig.twitter.card} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={seoConfig.twitter.title} />
      <meta name="twitter:description" content={seoConfig.twitter.description} />
      <meta name="twitter:image" content={seoConfig.twitter.image} />
      <meta name="twitter:creator" content={seoConfig.twitter.creator} />
      <meta name="twitter:site" content={seoConfig.twitter.creator} />

      {/* Theme & Icons */}
      <meta name="theme-color" content="#030712" />
      <meta name="msapplication-TileColor" content="#030712" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* JSON-LD Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
}
