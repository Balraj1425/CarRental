import React from "react";
import Profilepic from "../Images/ProfileImage/profile.webp";
import "../Profile/OwnerProfile.css";
import OtherDetails from "./OtherDetails";

const OwnerProfile = (props) => {
  return (
    <>
      <div className="container d-flex flex-column">
        <div className="ProfileImageDiv">
          <img src={Profilepic} alt="Profile pic" className="profilepic"></img>
        </div>
        <div className="NameDiv">
          <strong>
            <h2>{props.loggedInUserData.name}</h2>
          </strong>
        </div>
        <div>
          <OtherDetails loggedInUserData={props.loggedInUserData} />
        </div>
      </div>
    </>
  );
};

export default OwnerProfile;
