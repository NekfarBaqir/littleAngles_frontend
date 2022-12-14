import Head from "next/head";
import React from "react";
import Layout from "../components/common/Layout";
import StorySection from "../components/containers/StorySection";

const SEO = () => {
  return (
    <Head>
      <title>Little Angles Amazing Story</title>
      <meta
        name="description"
        content="What is the story behind Little Angels"
      />
      <meta
        name="keywords"
        content="littleAngles, ERC721, NFT,what is littleAngels,who we are, story, our story"
      />
    </Head>
  );
};

const Story = () => {
  return (
    <Layout SEO={<SEO />}>
      <StorySection />
    </Layout>
  );
};

export default Story;
