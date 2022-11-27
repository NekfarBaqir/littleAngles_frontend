import Image from "next/image";
import React from "react";
import Title from "../elements/Title";
import MintComponent from "../MintComponent";

const MintSection = () => {
  return (
    <div
      className="flex justify-center flex-wrap items-start z-50 my-4 md:my-6 lg:my-12 xl:my-20"
      id="mint"
    >
      <Title title={"Mint Section"} />

      <div className="w-full  px-2 md:px-4">
        <p className="font-bold w-full text-white bg-gradient-to-r  from-bluishCyan py-3 pb-6 md:pb-3 to-transparent px-4 my-2 rounded-2xl md:w-1/2 mx-auto flex justify-center items-center ">
          Mint your NFT by clicking the mint button bellow and after the
          transaction being fullfilled! you will see it listed in Opensea or
          Rarible (marketplaces)
        </p>
        <MintComponent />
      </div>
    </div>
  );
};

export default MintSection;
