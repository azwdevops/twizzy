import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";

const ProfileModal = ({ openProfileModal, setOpenProfileModal }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={openProfileModal}
      onClose={() => setOpenProfileModal(false)}
    >
      <form className="info-form">
        <h3>Your Info</h3>
        <div>
          <input type="text" name="firstName" placeholder="First Name" className="info-input" />
          <input type="text" name="lastName" placeholder="Last Name" className="info-input" />
        </div>
        <div>
          <input type="text" name="worksAt" placeholder="Works at" className="info-input" />
        </div>
        <div>
          <input type="text" name="livesIn" placeholder="Lives In" className="info-input" />
          <input type="text" name="country" placeholder="Country" className="info-input" />
        </div>
        <div>
          <input type="text" name="relationshipStatus" className="info-input" placeholder="Relationship Status" />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <button className="button info-button">Update</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
