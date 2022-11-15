import React from "react";
import { Link } from "react-scroll";
import { MENU } from "../constants/menu";

const Nav = () => {
  return (
    <div className=" justify-center items-center gap-4 md:gap-6 hidden lg:flex">
      {MENU.map((menu) => (
        <React.Fragment key={menu.name}>
          {!menu?.external ? (
            <Link
              className="text-lg md:text-xl p-2 font-bold cursor-pointer "
              to={menu.to}
              smooth={true}
              duration={500}
              offset={-130}
            >
              {menu.name}
            </Link>
          ) : (
            <a
              href={menu.to}
              target="_black"
              referrerPolicy="noreferrer"
              className="text-lg md:text-xl p-2 font-bold cursor-pointer "
            >
              {menu.name}
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Nav;
