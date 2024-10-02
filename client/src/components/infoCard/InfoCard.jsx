import React, { useState } from "react";

import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../profileModal/ProfileModal";

const InfoCard = () => {
  const [openProfileModal, setOpenProfileModal] = useState(false);

  return (
    <>
      <div className="info-card">
        <div className="info-head">
          <h4>Your Info</h4>
          <div>
            <UilPen width="2rem" height="1.2rem" onClick={() => setOpenProfileModal(true)} />
          </div>
        </div>
        <div className="info">
          <span>
            <b>Status </b>
          </span>
          <span>In Relationship</span>
        </div>
        <div className="info">
          <span>
            <b>Lives in </b>
          </span>
          <span>New York</span>
        </div>
        <div className="info">
          <span>
            <b>Works at </b>
          </span>
          <span>Meta</span>
        </div>

        <button className="button logout-button">Logout</button>
      </div>

      {openProfileModal && <ProfileModal openProfileModal={openProfileModal} setOpenProfileModal={setOpenProfileModal} />}
    </>
  );
};

export default InfoCard;
