import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import logo2 from "../../assets/logo/logo2.png";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = (
    <>
      <li>
        <Link className="active:bg-inherit" to="/">
          Product
        </Link>
      </li>
      <li>
        <Link className="active:bg-inherit" to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link className="active:bg-inherit" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/" className="active:bg-inherit">
          <button className="btn bg-white text-[#0A2640] rounded-3xl px-10 py-2 hover:bg-white">
            Login
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <nav className="navbar max-w-[1200px] mx-auto pt-[26px]">
      <div className="navbar-start gap-3 md:gap-0">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navItems}
          </ul>
        </div>
        <Link className="text-xl flex gap-[11px]">
          {path === "/blog" ? (
            <>
              <img src={logo2} alt="Logo" />
              <span className="text-[43px] font-Manrope leading-[33px] font-bold text-[#0A2640]">
                Boldo
              </span>
            </>
          ) : (
            <>
              <img src={logo} alt="Logo" />
              <span className="text-[43px] font-Manrope leading-[33px] font-bold text-white ">
                Boldo
              </span>
            </>
          )}
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1"> {navItems}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
