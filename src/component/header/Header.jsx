import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const[isMenuOpen,setIsMenuOpen]=useState(false);
  // console.log(isMenuOpen);
  const handleNav=()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className="navbar flex items-center w-full bg-light-black h-[70px]">
        {/* desktop navigation */}
        <div className="header flex items-center justify-between w-full max-w-[1200px] m-auto px-10">
          <div className="navbar-logo mr-3">
            <span className="text-2xl font-semibold">STORE</span>
          </div>
          <ul className="navbar-links flex gap-4 max-sm:hidden">
            <li>Login</li>
            <li>About</li>
          </ul>
          <div 
            className="hidden max-sm:block cursor-pointer"
            onClick={handleNav}
          >
            <MenuIcon/>
          </div>
        </div>
      </div>
      {
        isMenuOpen && (
          <div>
            <AiOutlineClose/>
          </div>
        )
      }
    </>
  );
};

export default Header;
