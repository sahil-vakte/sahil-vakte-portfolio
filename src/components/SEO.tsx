import { Helmet } from "react-helmet-async";
import { siteConfig } from "../data/config";

type SEOProps = {
  title: string;
  description: string;
  path: string; // e.g. "/" or "/work/openemr-healthcare-platform"
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

export default function SEO({
  title,
  description,
  path,
  image,
  imageAlt = "Sahil Vakte — Software Engineer portfolio",
  type = "website",
  noIndex = false,
  structuredData,
}: SEOProps) {
  const url = `${siteConfig.siteUrl}${path}`;
  const ogImage = image ?? `${siteConfig.siteUrl}/og-image.png`;
  const schemas = structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow, max-image-preview:large"} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={siteConfig.shortName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
