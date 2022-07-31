import React from "react";
import Profilepic from "../Images/ProfileImage/profile.webp";
import "../Profile/OwnerProfile.css";
import OtherDetails from "./OtherDetails";

const OwnerProfile = () => {
  return (
    <>
      <div className="container d-flex flex-column">
        <div className="ProfileImageDiv">
          <img src={Profilepic} alt="Profile pic" className="profilepic"></img>
        </div>
        <div className="NameDiv">
          <strong>
            <h2>Vineet Kumar Dixit</h2>
          </strong>
        </div>
        <div>
          <OtherDetails />
        </div>
      </div>
    </>
  );
};

export default OwnerProfile;
