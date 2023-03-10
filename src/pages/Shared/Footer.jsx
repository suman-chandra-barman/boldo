import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo2.png";

const Footer = () => {
  return (
    <footer className="mt-[30px] md:mt-[100px] text-[#777777] mb-10 md:mb-[117px] p-3 lg:p-10">
      <div className="footer grid-cols-3 md:grid-cols-5 text-xl leading-8">
        <div className="col-span-3 md:col-span-2 lg:w-[300px]">
          <Link to="/" className="flex gap-[10px]">
            <img src={logo} alt="logo" />
            <span className="text-[43px] font-Manrope leading-[33px] font-bold text-[#0A2640]">
              Boldo
            </span>
          </Link>
          <p className="mt-[20px] lg:mt-[40px] text-[16px]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>
        <div className="flex flex-col gap-1 md:gap-5 lg:gap-10 text-base md:text-xl">
          <span className=" text-black">Landings</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/product" className="link link-hover">
            Products
          </Link>
          <Link className="link link-hover">Services</Link>
        </div>
        <div className="flex flex-col gap-1 md:gap-5 lg:gap-10 text-base md:text-xl">
          <span className=" text-black">Company</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <div className="indicator pr-5 lg:pr-10">
            <span className="indicator-item bg-[#65E4A3] text-[#0A2640] border-0 lg:indicator-middle indicator-end text-[11px] md:text-[13px] font-bold badge badge-secondary ">
              Hiring!
            </span>
            <Link className="link link-hover">Careers</Link>
          </div>
          <Link className="link link-hover">Services</Link>
        </div>
        <div className="flex flex-col gap-1 md:gap-5 lg:gap-10 text-base md:text-xl">
          <span className=" text-black">Resources</span>
          <Link to="/blog" className="link link-hover">
            Blog
          </Link>
          <Link to="/product" className="link link-hover">
            Products
          </Link>
          <Link className="link link-hover">Services</Link>
        </div>
      </div>
      <div className="text-center md:text-xl lg:text-left mt-5 lg:mt-0">
        <p className="text-[#777777]"> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
