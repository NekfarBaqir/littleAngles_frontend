import React from "react";
import Image from "next/image";
import Nav from "./Nav";

const Layout = ({ children, SEO }) => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start relative">
      {SEO !== undefined && SEO}

      <div className="absolute w-full h-screen inset-0 bg-gradient-to-br -z-30 from-[#68c2f7]">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t -z-30 from-white to-transparent"></div>
        </div>
      </div>
      <header className="flex-0 w-full max-w-[1366px] mx-auto ">
        <Nav />
      </header>
      <main className="flex-1 w-full overflow-hidden max-w-[1366px] mx-auto z-40 ">
        {children}
      </main>
      <footer className="flex-0 w-full overflow-hidden max-w-[1366px] mx-auto mt-12 md:mt-16 border-t py-4 text-center text-gray-600 border-gray-200">
        little Angels Collection @ All rights reserved
      </footer>
    </div>
  );
};

export default Layout;
