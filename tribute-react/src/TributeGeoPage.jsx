import { Helmet } from "react-helmet-async";

const tributeDataGeo = {
  meta: {
    title: "The Life and Legacy of Alhaji J.B. Sododo",
    description: "A biography and tribute site chronicling the journey, faith, and leadership of Alhaji Sheikh J.B. Sododo (1942–2011).",
    keywords: [
      "Alhaji J.B. Sododo",
      "Sododo tribute",
      "Islamic scholar Nigeria",
      "Deputy Chief Imam [Na'ib] Ikare Akoko",
      "Legacy of truth",
      "15 year remembrance"
    ],
    author: "Sododo Family",
    published: "2026-06-12",
    updated: "2026-09-25",
    image: "/assets/sododo_hero2.png",
    url: "https://sododo-tribute.com/journey"
  }
};

export default function TributeGeoPage() {
  const { meta } = tributeDataGeo;

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <meta name="author" content={meta.author} />
        <meta name="date" content={meta.published} />
        <meta name="last-modified" content={meta.updated} />

        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Helmet>

      {/* Page content */}
      <div className="bg-cream text-dark font-lato">
        {/* Hero, Biography, Leadership, etc. */}
      </div>
    </>
  );
}
