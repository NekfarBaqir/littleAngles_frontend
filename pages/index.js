import Head from "next/head";
import Layout from "../components/common/Layout";
import FaqSection from "../components/containers/FaqSection";
import HeroSection from "../components/containers/HeroSection";
import MintSection from "../components/containers/MintSection";
import TeamSection from "../components/containers/TeamSection";

const SEO = () => {
  return (
    <Head>
      <title>Little Angles</title>
      <meta
        name="description"
        content="Little Angels, A collection of saviors for Afghan Children"
      />
      <meta name="keywords" content="littleAngles, ERC721, NFT" />
    </Head>
  );
};
const Home = () => {
  return (
    <Layout SEO={<SEO />}>
      <HeroSection />
      {/* 
      <FaqSection />
      <TeamSection /> */}
    </Layout>
  );
};

export default Home;
