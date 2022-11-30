import Head from "next/head";
import React from "react";
import Layout from "../components/common/Layout";
import TeamSection from "../components/containers/TeamSection";

const SEO = () => {
  return (
    <Head>
      <title>Little Angles Team</title>
      <meta
        name="description"
        content="Our experienced and collaborative team!"
      />
      <meta
        name="keywords"
        content="littleAngles, ERC721, NFT,what is littleAngels"
      />
    </Head>
  );
};

const Team = () => {
  return (
    <Layout SEO={<SEO />}>
      <TeamSection />
    </Layout>
  );
};

export default Team;
