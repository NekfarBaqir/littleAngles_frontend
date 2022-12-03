import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { config } from "../config";
import { useContract } from "../hooks/useContract";
import showMessage from "../utils/showMessage";
import { CountDown } from "./CountDown";
import Modal from "./elements/Modal";
import Image from "next/image";

const MintComponent = () => {
  const { account, chainId, library } = useWeb3React();
  const [counter, setCounter] = useState(1);
  const { signContract } = useContract();
  const [currentSupply, setCurrentSupply] = useState(0);
  const [paused, setPaused] = useState(false);
  const [balance, setBalance] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (chainId !== config.chainId) return;
    if (account) {
      getCurrentSupply();
      getIsContractPaused();
      getBalance();
    }
  }, [chainId, account]);

  const getCurrentSupply = async () => {
    setCurrentSupply((await signContract.currentTokenCount()).toString());
  };
  const getIsContractPaused = async () => {
    setPaused(await signContract.paused());
  };
  const getBalance = async () => {
    const balance = await library.getBalance(account);
    setBalance(balance);
  };

  const LinkToEtherScan = (hash) => {
    console.log(hash, "here is the hash");
    return (
      <a
        href={`https://goerli.etherscan.io/tx/${hash}`}
        target="_blank"
        rel="noreferrer"
      >
        View on etherscan
      </a>
    );
  };
  const SeeInOpenSea = () => (
    <a
      href="https://testnets.opensea.io/collection/littleangels-lwnazletzn"
      target="_blank"
      rel="noreferrer"
    >
      Check on Opensea
    </a>
  );
  const mintHandler = async () => {
    if (!account) {
      showMessage("error", "Please connect your wallet!");
      return;
    }
    const value = ethers.utils.parseEther(
      `${counter * Number(config.mintPrice)}`
    );
    if (value.gt(balance)) {
      showMessage("error", "InSufficient Balance!");
      return;
    }
    try {
      const tx = await signContract.mint(counter, {
        value: value,
      });
      showMessage("success", LinkToEtherScan(tx?.hash));

      const rs = await tx.wait();
      if (rs) {
        getCurrentSupply();
        showMessage("success", `Successfully Minted`);
        showMessage("success", SeeInOpenSea());
      }
    } catch (error) {
      showMessage("error", error.message);
      console.log(error);
    }
    return;
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center px-3 mt-10 sm:flex-row md:px-4 lg:px-8 xl:px-12">
      <div className="">
        <h2 className="w-full mt-5 text-2xl text-center text-gray-700 md:mt-8 lg:mt-12 sm:text-left">
          Presale mint will start in:
        </h2>
        <div className="w-full text-center sm:text-left">
          <CountDown
            time={"November 28, 2022 5:00:00 AM GMT+8 (singapore time)"}
          />
        </div>
        {paused ? (
          <h2 className="my-4 mt-4 ml-3 text-2xl text-black md:text-3xl lg:text-4xl md:my-8 lg:my-12">
            Minting will start soon!
          </h2>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className=" bg-gradient-to-r from-bluishCyan to-greenishCyan w-[200px] hover:from-cyan-600 transition-all hover:to-blue-700 lg:px-8 py-3 text-white font-bold md:py-4   px-6 md:px-12 rounded-3xl my-4 md:my-8 lg:my-12"
          >
            Mint
          </button>
        )}
      </div>
      <div className="w-[300px]">
        <CircularProgressbar
          value={(currentSupply / 1000) * 100}
          text={`${currentSupply}/1000`}
        />
      </div>

      <Modal open={open} setOpen={setOpen}>
        <div className="flex items-center justify-center w-full">
          <Image
            src={"/images/logo.png"}
            width={200}
            height={200}
            layout="fixed"
            alt="logo"
          />
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row sm:gap-3">
          <h1 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl md:my-3">
            {counter}
          </h1>
          <p className="text-lg text-right text-bluishCyan md:text-xl xl:text-2xl">
            ({parseFloat(counter * Number(config.mintPrice))?.toFixed(2)}ETH)
          </p>
        </div>
        <div className="px-3 md:px-4">
          <Slider
            min={1}
            max={5}
            step={1}
            value={counter}
            onChange={(val) => setCounter(val)}
          />
        </div>
        <div className="text-center">
          <button
            onClick={mintHandler}
            className=" bg-gradient-to-r from-bluishCyan to-greenishCyan hover:from-cyan-600 transition-all hover:to-blue-700 w-[200px] lg:px-8 py-3 text-white font-bold md:py-4   px-6 md:px-12 rounded-3xl my-4 md:my-8 lg:my-12"
          >
            Mint
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default MintComponent;
