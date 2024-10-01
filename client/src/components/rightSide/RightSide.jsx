import React from "react";

import "./RightSide.css";
import Home from "@/assets/home.png";
import Noti from "@/assets/noti.png";
import Comment from "@/assets/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../trendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="right-side">
      <div className="nav-icons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />

      <button className="button r-button">Share</button>
    </div>
  );
};

export default RightSide;
