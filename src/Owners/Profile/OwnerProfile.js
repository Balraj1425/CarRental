import React, { useState, useEffect } from "react";
import Profilepic from "../Images/ProfileImage/profile.webp";
import "../Profile/OwnerProfile.css";
import OtherDetails from "./OtherDetails";
import axios from "axios";

const OwnerProfile = (props) => {
  const [ownerCarDetails, setOwnerCarDetails] = useState();

  useEffect(() => {
    // console.log("****************")
    // console.log(props)
    // console.log(props.loggedInUserData._id)
    axios
      .post("http://localhost:3001/ownerprofilecardetails", {
        ownerId: props.loggedInUserData._id,
      })
      .then((res) => {
        console.log(res.data);
        if (res) {
          setOwnerCarDetails(res.data);
        }
      });
  }, []);

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
          <OtherDetails
            loggedInUserData={props.loggedInUserData}
            ownerCarDetails={ownerCarDetails}
          />
        </div>
      </div>
    </>
  );
};

export default OwnerProfile;
