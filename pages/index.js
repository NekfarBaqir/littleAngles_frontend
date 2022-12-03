import Head from "next/head";
import Layout from "../components/common/Layout";
import HeroSection from "../components/containers/HeroSection";

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
    </Layout>
  );
};
export default Home;
