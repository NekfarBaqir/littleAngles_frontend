import React from "react";
import Image from "next/image";
import { MENU } from "../constants/menu";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="overflow-hidden mt-12 md:mt-16 border-t py-8 text-center text-gray-600 md:py-[60px] border-gray-200  bg-gradient-to-t from-[#68c2f7] to-transparent ">
      <div className="grid grid-cols-2 sm:grid-cols-3  items-start  py-6 max-w-[1366px] mx-auto ">
        <Image
          src={"/images/logo.png"}
          width={200}
          height={200}
          layout="fixed"
          alt="logo"
        />
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold text-xl p-2 border-b border-double border-4 border-[#68c2f7] rounded-xl my-2">
            {" "}
            About Us:
          </h1>
          {MENU.slice(2, 5).map((menu) => (
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
        <h1 className="font-bold text-xl p-2 border-b border-double border-4 md:px-20 border-[#68c2f7] rounded-xl my-2">
          Get your chance with us:
          </h1>
          <button
            // onClick={connect}
            className={`
         bg-gradient-to-r from-bluishCyan to-greenishCyan md:px-20 hover:from-cyan-600 transition-all hover:to-blue-700 px-4  py-2 md:py-4 rounded-xl text-white font-bold md:rounded-3xl  `}
          >
            JOIN OUR DISCORD
          </button>
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
