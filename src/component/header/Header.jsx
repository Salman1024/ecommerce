import React from "react";
import { Link } from "react-router-dom";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  return (
    <div className="header-container z-[2]  w-full bg-white">
      <ContentWrapper>
        <div className="header flex gap-3 items-center justify-between h-16">
          <div className="logo cursor-pointer ">
            <span className="logo-name text-2xl text-blue-700 font-bold">
              <Link to="/">MegaMart</Link>
            </span>
          </div>
          <div className="center-section flex items-center justify-center px-1 border border-gray-400  rounded-full cursor-pointer w-[800px]">
            <input
              className="search p-2 rounded-full outline-none w-full"
              placeholder="Search for anything"
              type="text"
            />
            <SearchSharpIcon sx={{ fontSize: 30 }} />
          </div>
          <div className="right-section flex gap-5 cursor-pointer">
            <div className="login-signup">
              <Link to="/login" className="nav-name flex items-center">
                <LoginIcon sx={{ fontSize: 25, marginRight: "5px" }} />
                Login/Signup
              </Link>
            </div>
            <div className="cart">
              <Link to="/cart" className="nav-name flex items-center">
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: 25, marginRight: "5px" }}
                />
                Cart
              </Link>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Header;
