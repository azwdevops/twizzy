import React from "react";

import "./Profile.css";
import ProfileLeft from "@/components/profileLeft/ProfileLeft";
import ProfileCard from "@/components/profileCard/ProfileCard";
import PostSide from "@/components/postSide/PostSide";
import RightSide from "@/components/rightSide/RightSide";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profile-center">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
