import React from "react";

const Header = () => {
  return (
    <div className="header flex  gap-3 items-center justify-between px-5 py-5 bg-white h-16">
      <div className="logo cursor-pointer ">
        <span className="logo-name text-2xl text-blue-700 font-bold">
          MegaMart
        </span>
      </div>
      <div className="center-section">
        <input
          className="search border border-gray-400 px-2 py-1 rounded-md outline-none w-[600px] max-w-[400px] "
          type="search"
          placeholder="Search for anything"
        />
      </div>
      <div className="right-section flex gap-5 cursor-pointer">
        <div className="login-signup">
          <li className="login-line list-none">Login/Signup</li>
        </div>
        <div className="cart">
          <li className="login-line list-none">Cart</li>
        </div>
      </div>
    </div>
  );
};

export default Header;
