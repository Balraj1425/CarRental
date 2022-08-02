import React, { useState, useEffect } from "react";
import Profilepic from "../Images/ProfileImage/profile.webp";
import "../Profile/OwnerProfile.css";
import OtherDetails from "./OtherDetails";
import axios from "axios";

const OwnerProfile = (props) => {
  const [ownerCarDetails, setOwnerCarDetails] = useState();
  const [userProfileData, setUserProfileData] = useState();
  const [refreshData, setRefreshData] = useState();

  useEffect(() => {
    axios.post("http://localhost:3001/ownerprofilecardetails", {ownerId: props.loggedInUserData._id})
      .then((res) => {
        console.log(res.data);
        if (res) {
          setOwnerCarDetails(res.data);
        }
      });
    axios.post("http://localhost:3001/userprofiledata", {ownerId: props.loggedInUserData._id})
      .then((res) => {
        console.log("//////////////////////////////////")
        console.log(res.data);
        if (res) {
          setUserProfileData(res.data);
        }
        setRefreshData(false)
      });
  }, [refreshData]);

  const updateHandler = (data) => {
    setRefreshData(data)
  }

  return (
    <>
      <div className="container d-flex flex-column">
        <div className="ProfileImageDiv">
          <img src={Profilepic} alt="Profile pic" className="profilepic"></img>
        </div>
        <div className="NameDiv">
          {userProfileData &&
            <strong>
              <h2>{userProfileData.name}</h2>
            </strong>
          }
        </div>
        <div className="accordian">
          {userProfileData && ownerCarDetails && (
            <OtherDetails
              loggedInUserData={props.loggedInUserData}
              ownerCarDetails={ownerCarDetails}
              userProfileData={userProfileData}
              onUpdate={updateHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default OwnerProfile;
