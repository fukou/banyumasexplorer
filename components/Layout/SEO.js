import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <Head>
    {pageTitle ? (
      <title>{pageTitle} | Banyumas Explorer</title>
    ) : (
      <title>Banyumas Explorer</title>
    )}
    <meta name="description" content="Personal Site" />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content="{pageTitle}" />
    <meta
      name="og:description"
      property="og:description"
      content="Banyumas Explorer is ...."
    />
    <meta property="og:site_name" content="Faiz Ichsan Jaya" />
    <meta property="og:url" content="" />
    {/* <link rel="icon" type="image/png" href="/images/favicon.ico" />
    <link rel="apple-touch-icon" href="/images/favicon.ico" />
    <link rel="shortcut icon" href="/images/favicon.ico" /> */}
  </Head>
);
export default SEO;