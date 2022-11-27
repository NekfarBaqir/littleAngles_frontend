import React from "react";
import Image from "next/image";
import { MENU } from "../constants/menu";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="overflow-hidden mt-12 md:mt-16 border-t py-8 text-center text-gray-600 md:py-[60px] border-gray-200  bg-gradient-to-t from-[#68c2f7] to-transparent ">
      <div className="grid grid-cols-1 sm:grid-cols-3   gap-2 items-start  py-6 max-w-[1366px] mx-auto ">
        <div className="w-full flex justify-center items-center">
          <Image
            src={"/images/logo.png"}
            width={200}
            height={200}
            layout="fixed"
            alt="logo"
          />
        </div>
        <div className="flex flex-col justify-center items-center sm:items-start">
          {[...MENU.slice(0, 1), ...MENU.slice(2, 5)].map((menu) => (
            <Link
              key={menu.to}
              className="text-lg md:text-xl p-2 font-bold cursor-pointer "
              to={menu.to}
              smooth={true}
              duration={500}
              offset={-130}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-center  items-center w-full  sm:items-start gap-2">
          <button
            // onClick={connect}
            className={`
         bg-gradient-to-r from-bluishCyan to-greenishCyan md:px-20 hover:from-cyan-600 transition-all hover:to-blue-700 px-4  py-2 md:py-4 rounded-xl text-white font-bold md:rounded-3xl  `}
          >
            JOIN OUR DISCORD
          </button>
          <a
            href="https://goerli.etherscan.io/address/0x9eDC1B6aAd9E36E4eb56061eF0875508c4047682"
            target={"_blank"}
            rel="noreferrer"
            className={`
                bg-gradient-to-r to-bluishCyan from-greenishCyan md:px-20 hover:from-cyan-600 transition-all hover:to-blue-700 px-4  py-2 md:py-4 rounded-xl text-white font-bold md:rounded-3xl  `}
          >
            CONTRACT ADDRESS
          </a>

          <button
            // onClick={connect}
            className={`
         bg-gradient-to-r from-bluishCyan md:px-20 to-greenishCyan hover:from-cyan-600 transition-all hover:to-blue-700 px-4  py-2 md:py-4 rounded-xl text-white font-bold md:rounded-3xl  `}
          >
            Mint Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
