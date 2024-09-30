import React from "react";
import Logo from "@/assets/logo.png";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.css";

const LogoSearch = () => {
  return (
    <div className="logo-search">
      <img src={Logo} alt="" />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="search-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
