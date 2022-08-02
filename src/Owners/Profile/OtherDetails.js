import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import carImage from "../../components/images/creta.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import axios from "axios";

export default function OtherDetails(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [ownerCarData, setOwnerCarData] = useState();
  // const [dataUpdated, setdataUpdated] = useState(false);
  const [updateData, setUpdateData] = useState({
    name: props.loggedInUserData.name,
    email: props.loggedInUserData.email,
    phone: props.loggedInUserData.phone,
  });
  const [changePassword, setchangePassword] = useState({ password: "" });
  // console.log("UpdatedData", updateData);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
    console.log("event", event.target);
  };

  const passwordhandleChange = (e) => {
    const { name, value } = e.target;
    setchangePassword({
      ...changePassword,
      [name]: value,
    });
  };

  useEffect(() => {
    setOwnerCarData(props.ownerCarDetails);
  }, []);

  const UpdateOwnerData = () => {
    axios
      .put(
        `http://localhost:3001/updateDetails/${props.loggedInUserData._id}`,
        updateData
      )
      .then((res) => {
        // if (res) {
        //   setdataUpdated(true);
        // }
        // console.log("res", res);
      });
  };

  const updatePassword = (e) => {
    e.preventDefault();
    try {
      if (changePassword.password === "") {
        alert("Please enter password to change");
      } else {
        axios
          .put(
            `http://localhost:3001/changepassword/${props.loggedInUserData._id}`,
            changePassword
          )
          .then((res) => {
            // console.log("res", res);
            alert("Password succesfully Changed");
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   UpdateOwnerData();
  // }, [dataUpdated]);
  console.log("inside accordian");
  console.log(props);
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <div className="card-wrapper">
              <span>Personal Details</span>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="card card-wrapper">
              <span>FullName:&nbsp;&nbsp; {props.loggedInUserData.name}</span>
              <span>
                Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {props.loggedInUserData.phone}
              </span>
              <span>
                Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {props.loggedInUserData.email}
              </span>
              <span>
                OwnerId:&nbsp;&nbsp;&nbsp;{props.loggedInUserData._id}
              </span>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <div className="card-wrapper">
              <span>Your Rented Cars</span>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {ownerCarData &&
            ownerCarData.map((item, index) => {
              return (
                <Typography key={index}>
                  <div className="card card-wrapper">
                    <div className="d-flex">
                      <div className="CarImageDiv">
                        <img
                          src={carImage}
                          alt="Car Image"
                          className="carImage"
                        ></img>
                      </div>
                      <div className="d-flex flex-column  justify-content-around CarDetails">
                        <div className="d-flex flex-row justify-content-around">
                          <span>Brand:{item.carBrand}</span>
                          <span>Model:{item.carModel}</span>
                          <span>Type: {item.carType}</span>
                        </div>
                        <div className="d-flex flex-row  justify-content-around">
                          <span>FuelType: {item.fuelType}</span>
                          <span>Transmission: {item.transmissionType}</span>
                          <span>Vehichle No: {item.carNumber}</span>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                          <span>
                            Status: {item.status ? "Available" : "Booked"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ;
                </Typography>
              );
            })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <div className="card-wrapper">
              <span>Edit Details</span>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                id="outlined-name"
                label="name"
                name="name"
                value={updateData.name}
                onChange={handleChange2}
              />
              <TextField
                id="outlined-name"
                label="phone "
                name="phone"
                value={updateData.phone}
                onChange={handleChange2}
              />
              <TextField
                id="outlined-name"
                label="email "
                name="email"
                value={updateData.email}
                onChange={handleChange2}
              />

              <Button
                variant="contained"
                color="success"
                onClick={UpdateOwnerData}
              >
                Update
              </Button>
            </Stack>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <div className="card-wrapper">
              <span>Change Password</span>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                id="outlined-name"
                label="password"
                name="password"
                value={changePassword.password}
                onChange={passwordhandleChange}
              />
              <Button
                variant="contained"
                color="success"
                onClick={updatePassword}
              >
                Change Password
              </Button>
            </Stack>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
