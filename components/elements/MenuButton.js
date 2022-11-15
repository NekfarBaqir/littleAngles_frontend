import Image from "next/image";
import React from "react";

const MenuButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="cursor-pointer lg:hidden"
      onClick={onClick}
    >
      <Image
        layout="fixed"
        src={"/images/MenuIcon.svg"}
        width={24}
        height={20}
        alt="menuIcon"
      />
    </button>
  );
};

export default MenuButton;
