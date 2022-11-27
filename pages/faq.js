import Head from "next/head";
import React from "react";
import Layout from "../components/common/Layout";
import FaqSection from "../components/containers/FaqSection";

const SEO = () => {
  return (
    <Head>
      <title>Little Angles</title>
      <meta
        name="description"
        content="Common Questions about Little Angles NFT collectables"
      />
      <meta
        name="keywords"
        content="littleAngles, ERC721, NFT,what is littleAngels"
      />
    </Head>
  );
};

const faq = () => {
  return (
    <Layout SEO={<SEO />}>
      <FaqSection />
    </Layout>
  );
};

export default faq;
