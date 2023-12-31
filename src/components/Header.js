import React from "react";

import Logo from "../assets/logo.png";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" className="h-[128px] w-[128px]" />
          </a>

          <button className="btn btn-sm">
            <Link to="contact">Work with me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
