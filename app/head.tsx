export default function Head() {
  return (
    <>
      <title>Avishek | Futuristic AI & Web Developer</title>

      <meta
        name="description"
        content="Portfolio of Avishek — AI & Cloud learner, Modern Web Developer, and Creative Tech Engineer building futuristic interactive experiences."
      />
      <meta
        name="keywords"
        content="Avishek, AI Developer, Web Developer, Cloud Engineer, Portfolio, Next.js, Framer Motion, Tailwind, Machine Learning, Futuristic Portfolio"
      />
      <meta name="author" content="Avishek" />

      {/* Mobile View */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Theme */}
      <meta name="theme-color" content="#000000" />

      {/* Open Graph */}
      <meta property="og:title" content="Avishek | Futuristic AI & Web Developer" />
      <meta
        property="og:description"
        content="A futuristic interactive portfolio by Avishek — AI & Cloud engineering enthusiast."
      />
      <meta property="og:image" content="/og-preview.png" />
      <meta property="og:url" content="https://avishek-portfolio.vercel.app" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Avishek | Futuristic AI Portfolio" />
      <meta
        name="twitter:description"
        content="Explore futuristic portfolio animations, AI projects, and creative engineering work by Avishek."
      />
      <meta name="twitter:image" content="/og-preview.png" />

      {/* Icons */}
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/icon-512.png" />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
    </>
  );
}
