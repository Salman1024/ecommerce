import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar flex items-center w-full bg-light-black h-[70px] ">
        <div className="header flex items-center justify-between w-full max-w-[1200px] m-auto px-10">
          <div className="navbar-logo mr-1">
            <span className="text-2xl font-semibold">STORE</span>
          </div>
          <ul className="navbar-links flex gap-4">
            <li>Login</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
