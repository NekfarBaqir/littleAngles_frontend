import Head from "next/head";
import React from "react";
import Layout from "../components/common/Layout";
import MintSection from "../components/containers/MintSection";

const SEO = () => {
  return (
    <Head>
      <title>Mint your First Baby Angel!</title>
      <meta
        name="description"
        content="Start your collaboration with awesome team of angels to save kids lives"
      />
      <meta
        name="keywords"
        content="littleAngles, ERC721, NFT,mint, smart contract, non-fungible token"
      />
    </Head>
  );
};

const faq = () => {
  return (
    <Layout SEO={<SEO />}>
      <MintSection />{" "}
    </Layout>
  );
};

export default faq;
