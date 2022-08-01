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

export default function OtherDetails(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log("inside accordian")
  console.log(props)
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
                Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.loggedInUserData.phone}
              </span>
              <span>
                Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.loggedInUserData.email}
              </span>
              <span>OwnerId:&nbsp;&nbsp;&nbsp;{props.loggedInUserData._id}</span>
              {/* <span>Password:&nbsp;&nbsp; ******************</span> */}
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
          <Typography>
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
                    <span>Brand: car Brand</span>
                    <span>Model: car Model</span>
                    <span>Type: car type</span>
                  </div>
                  <div className="d-flex flex-row  justify-content-around">
                    <span>FuelType: car fuelType</span>
                    <span>transmission: Automatic</span>
                    <span>Vehichle No: carNumber</span>
                  </div>
                  <div className="d-flex flex-row justify-content-around">
                    <span>Status: car status</span>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
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
                label="name  "

                //   value={name}
                //   onChange={handleChange}
              />
              <TextField
                id="outlined-name"
                label="phone "

                //   value={name}
                //   onChange={handleChange}
              />
              <TextField
                id="outlined-name"
                label="email "

                //   value={name}
                //   onChange={handleChange}
              />
              <TextField
                id="outlined-name"
                label="password  "

                //   value={name}
                //   onChange={handleChange}
              />
              <Button variant="contained" color="success">
                Update
              </Button>
            </Stack>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
