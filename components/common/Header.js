import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-scroll";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { MENU } from "../constants/menu";
import MenuButton from "../elements/MenuButton";
import { WalletConnectButton } from "../elements/WalletConnectButton";
import Nav from "./Nav";

const Header = () => {
  // states
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  // actions
  const menuToggler = () => {
    setMobileMenuVisibility((prev) => !prev);
  };

  return (
    <div className="flex justify-between box-border transition-all origin-top items-center w-full p-2 md:p-4 lg:p-6 py-2 md:py-3 lg:py-3 bg-gradient-to-b  to-transparent">
      <Image
        src={"/images/logo.png"}
        width={100}
        height={100}
        layout="fixed"
        alt="logo"
      />
      <Nav />

      <div className="flex justify-end items-center gap-2">
        <WalletConnectButton />
        <MenuButton onClick={menuToggler} />
      </div>

      <ul
        className={`
          lg:hidden absolute top-[99%] w-full min-h-fit  py-3 z-10 left-0 transition-all bg-gradient-to-br from-[#68c2f7] to-transparent flex flex-col origin-top
          ${mobileMenuVisibility ? "scale-y-100" : "scale-y-0"}
        `}
      >
        {MENU.map((menu) => (
          <React.Fragment key={menu.name}>
            {!menu?.external ? (
              <Link href={menu.to} passHref>
                <span className="text-lg lg:text-xl p-2 font-bold cursor-pointer ">
                  {menu.name}
                </span>
              </Link>
            ) : (
              <a
                href={menu.to}
                className="text-lg md:text-xl p-2 font-bold cursor-pointer "
              >
                {menu.name}
              </a>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Header;
