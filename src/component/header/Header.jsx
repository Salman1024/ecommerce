import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header flex items-center justify-between h-[70px] w-full px-2 bg-light-black">
        
          <Link to="/" className="logo-name text-2xl font-semibold mr-4 ">
            MegaMart
          </Link>
       
        <div>
          <ul className="links">
            <a href="#">Login</a>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
