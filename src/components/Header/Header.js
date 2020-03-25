import React from "react";
import logo from "../../logo.png";

import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="position-sticky">
      <div className="text-center img-fluid ">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav className=" header-nav ">
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage</a>
      </nav>
    </div>
  );
};

export default Header;
