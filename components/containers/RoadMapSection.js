import React from "react";

const roadMapData = [
  {
    title: "Minting phase",
    description:
      "On January 1th 2023, we will lunch our NFT collectables, Now you can send your wallet address to be whitelisted for presale minting. You can own one little angel at 0.075 ETH whitelisted, while in public mint it costs you 0.085 ETH.",
  },
  {
    title: "Holder Events",
    description:
      "We will manage to have Events and twitter spaces with our holder to talk about the next plans and off course we will have some prizes for out big collectable holder! A price of 1ETH and 50 Goodness Token! ",
  },
  {
    title: "Enabling Staking",
    description:
      "We will create a reward token, that if you give your Angel to the contract, you will earn our Goodness token",
  },
  {
    title: "Raffles & Auctions",
    description:
      "we will create a raffle and auction contract that you can attend with your Goodness Token and win the prizes!",
  },

  {
    title: "Moving Towards Metaverse",
    description:
      "We plan to create a heaven in Metaverse and the key to enter the Angels heaven is to own a little angel! and there we will have all goodness and profits!",
  },
];
const RoadMapSection = () => {
  return (
    <div className="w-full px-10 md:px-20">
      <h1 className="w-full my-3 px-2 text-center text-3xl md:text-5xl font-bold">
        Where our project is going?
      </h1>
      <div className="mx-auto w-full px-4 md:px-10  lg:w-[70%] grid grid-cols-12 items-start md:items-center gap-2 md:gap-4 gap-y-10 my-20 ">
        {roadMapData.map((map,index) => (
          <>
            <div className="col-span-5 md:col-span-3 flex justify-start items-center gap-1"> <span className="w-[20px] h-[20px] bg-bluishCyan rounded-full p-3  flex justify-center items-center border text-white" >{index+1}</span>{map.title}</div>
            <div className="col-span-7 md:col-span-9  border-dashed px-2 md:px-8 border-l-2 border-">{map.description}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default RoadMapSection;
