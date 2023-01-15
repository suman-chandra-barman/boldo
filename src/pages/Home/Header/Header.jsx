import React from "react";
import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";

const Header = () => {
  return (
    <header className="bg-[#0A2640] text-white pb-[64px] relative z-[1] overflow-hidden">
      <div className="max-w-[1200px] mx-auto ">
        <Navbar />
        <Banner />
      </div>
    </header>
  );
};

export default Header;
