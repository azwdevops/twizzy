import React from "react";

import "./Home.css";
import ProfileSide from "@/components/profileSide/ProfileSide";
import PostSide from "@/components/postSide/PostSide";
const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <div className="right-side">Right Side</div>
    </div>
  );
};

export default Home;
