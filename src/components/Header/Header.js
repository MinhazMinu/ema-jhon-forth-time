import React from "react";
import logo from "../../logo.png";
import { UseAuth } from "../Login/useAuth";

import "./Header.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const auth = UseAuth();

  return (
    <div className="position-sticky">
      <div className="text-center img-fluid ">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav className=" header-nav ">
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage</a>
        {auth.user && (
          <span className="text-success">WelCome! {auth.user.name} </span>
        )}
        {auth.user ? (
          <Link to="/login">Sign Out</Link>
        ) : (
          <Link to="/login">Sign In</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
