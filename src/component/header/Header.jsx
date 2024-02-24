import React from "react";
import { Link } from "react-router-dom";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

const Header = () => {
  return (
    <div className="header-container w-full bg-white  ">
      <div className="header flex gap-3 items-center justify-between px-3 h-16">
        <div className="logo cursor-pointer ">
          <span className="logo-name text-2xl text-blue-700 font-bold">
            <Link to="/">MegaMart</Link>
          </span>
        </div>
        <div className="center-section flex items-center justify-center px-1 border border-gray-400  rounded-full cursor-pointer max-md:hidden ">
          <input
            className="search p-2 rounded-full outline-none w-[800px] max-xl:w-[600px] max-lg:w-[400px]"
            placeholder="Search for anything"
            type="text"
          />
          <SearchSharpIcon sx={{ fontSize: 30 }} />
        </div>
        <div className="right-section flex gap-5 cursor-pointer">
          <div className="login-signup">
            <Link to="/login">Login/Signup</Link>
          </div>
          <div className="cart">
            <li className="login-line list-none">Cart</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
