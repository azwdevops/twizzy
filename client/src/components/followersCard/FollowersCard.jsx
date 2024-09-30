import React from "react";
import "./FollowersCard.css";
import { Followers } from "@/data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="followers-card">
      <h3>Who is following you</h3>
      {Followers?.map((follower, index) => (
        <div className="follower" key={index}>
          <div>
            <img src={follower.img} className="follower-img" alt="" />
            <div className="name">
              <span>{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
          </div>
          <button className="button fc-button">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default FollowersCard;
