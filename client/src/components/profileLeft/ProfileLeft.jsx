import React from "react";

import LogoSearch from "../logoSearch/LogoSearch";
import FollowersCard from "../followersCard/FollowersCard";
import InfoCard from "../infoCard/InfoCard";

const ProfileLeft = () => {
  return (
    <div className="profile-side">
      <LogoSearch />
      <InfoCard />

      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
