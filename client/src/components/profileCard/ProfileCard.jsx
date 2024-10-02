import React from "react";

import "./ProfileCard.css";
import Cover from "@/assets/cover.jpg";
import Profile from "@/assets/profileImg.jpg";

const ProfileCard = () => {
  const profilePage = true;

  return (
    <div className="profile-card">
      <div className="profile-images">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="profile-name">
        <span>Jane Queen</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="follow-status">
        <hr />
        <div>
          <div className="follow">
            <span>10,245</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>20</span>
            <span>Following</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3 </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
