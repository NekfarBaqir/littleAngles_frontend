import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, SEO }) => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start relative">
      {SEO !== undefined && SEO}

      <div className="absolute w-full h-screen inset-0 bg-gradient-to-br -z-30 from-[#68c2f7]">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t -z-30 from-white to-transparent"></div>
        </div>
      </div>
      <header className="flex-0 w-full max-w-[1366px] mx-auto z-[10000] ">
        <Header />
      </header>
      <main className="flex-1 w-full overflow-hidden max-w-[1366px] mx-auto z-40 ">
        {children}
      </main>
      <footer className="flex-0 w-full ">
        <Footer />
        {/* little Angels Collection @ All rights reserved */}
      </footer>
    </div>
  );
};

export default Layout;
