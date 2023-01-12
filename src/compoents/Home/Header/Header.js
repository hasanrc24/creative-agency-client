import React from "react";
import Banner from "./Banner/Banner";
import Navigationbar from "./NavigationBar/NavigationBar";
import "./Header.css";

const Header = () => {
  return (
    <div id="header" className="header-bg">
      <Navigationbar />
      <Banner />
    </div>
  );
};

export default Header;
