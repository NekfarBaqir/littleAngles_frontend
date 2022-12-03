import Head from "next/head";
import React from "react";
import Layout from "../components/common/Layout";
import RoadMapSection from "../components/containers/RoadMapSection";
import StorySection from "../components/containers/StorySection";

const SEO = () => {
  return (
    <Head>
      <title>Little Angles RoadMap</title>
      <meta
        name="description"
        content="What is the Little Angels RoadMap?"
      />
      <meta
        name="keywords"
        content="littleAngles, ERC721, NFT,what is littleAngels,next phases, where were are going , our future"
      />
    </Head>
  );
};

const RoadMap = () => {
  return (
    <Layout SEO={<SEO />}>
      <RoadMapSection />
    </Layout>
  );
};

export default RoadMap;
