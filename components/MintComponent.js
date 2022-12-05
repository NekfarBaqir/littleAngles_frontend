import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useState, useEffect, useMemo } from "react";
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
  const [tx, setTx] = useState(null);
  const [verified, setVerified] = useState(false);
  const [paused, setPaused] = useState(false);
  const [balance, setBalance] = useState(0);
  const [mintLoading, setMintLoading] = useState(false);
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
    setMintLoading(true);
    try {
      const value = ethers.utils.parseEther(
        `${counter * Number(config.mintPrice)}`
      );
      console.log(balance, "balance");
      console.log(value, "value");
      if (value.gt(balance)) {
        showMessage("error", "InSufficient Balance!");
        return;
      }

      const tx = await signContract.mint(counter, {
        value: value,
      });
      setTx(tx?.hash);
      const rs = await tx.wait();
      if (rs) {
        getCurrentSupply();
        showMessage("success", "You have successfully minted!");
        setVerified(true);
      }
    } catch (error) {
      showMessage("error", error.message);
      console.log(error);
    } finally {
      setMintLoading(false);
      return true;
    }
  };

  useMemo(() => {
    if (open === false) {
      setTx(null);
      setVerified(false);
    }
  }, [open]);

  return (
    <div className="flex flex-col-reverse items-center justify-center px-3 mt-10 sm:flex-row md:px-4 lg:px-8 xl:px-12">
      <div className="">
        {paused ? (
          <>
            <h2 className="w-full mt-5 text-2xl text-center text-gray-700 md:mt-8 lg:mt-12 sm:text-left">
              Presale mint will start in:
            </h2>
            <div className="w-full text-center sm:text-left">
              <CountDown
                time={"December 28, 2022 5:00:00 AM GMT+8 (singapore time)"}
              />
            </div>
          </>
        ) : (
          <h2 className="w-full mt-5 text-2xl text-center px-3 font-bold  text-greenishCyan md:mt-8 lg:mt-12 sm:text-left">
            Collection is Already in Sale!
          </h2>
        )}
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
        {tx && verified && (
          <div className="w-full flex justify-center flex-col items-center py-3">
            <h1 className="text-bluishCyan text-center">
              You have Successfully minted your Little Angels!
            </h1>
            {SeeInOpenSea()}
          </div>
        )}
        {tx && !verified && (
          <div className="w-full flex flex-col justify-center items-center py-3">
            <h1 className="text-bluishCyan text-center">
              Your Transaction has been initialized!
            </h1>
            {LinkToEtherScan(tx)}
          </div>
        )}
        {!tx && (
          <>
            <div className="flex flex-col items-center justify-center md:flex-row sm:gap-3">
              <h1 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl md:my-3">
                {counter}
              </h1>
              <p className="text-lg text-right text-bluishCyan md:text-xl xl:text-2xl">
                ({(counter * 0.085)?.toFixed(3)}ETH)
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
          </>
        )}
        {tx && verified ? (
          <div className="flex justify-center items-center py-5 text-2xl">
            🔥🔥🔥 CONGRATS 🥳🥳🥳
          </div>
        ) : (
          <div className="text-center">
            <button
              disabled={mintLoading}
              onClick={mintHandler}
              className=" bg-gradient-to-r disabled:opacity-40 from-bluishCyan to-greenishCyan hover:from-cyan-600 transition-all hover:to-blue-700 w-[200px] lg:px-8 py-3 text-white font-bold md:py-4   px-6 md:px-12 rounded-3xl my-4 md:my-8 lg:my-12"
            >
              {mintLoading ? "Loading..." : "Mint"}
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MintComponent;


