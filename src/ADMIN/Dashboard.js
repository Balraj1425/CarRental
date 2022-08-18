import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import UserTable from "./UserTable";
import "../ADMIN/Dashboard.css";

export default function Dashboard() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <div className="container newCarDiv">
        <div>
          <strong className="UserDetails">Enter New Car</strong>
          <div className="d-flex container p-2 ">
            <div className="login-wrapper">
              <div className="card">
                <form>
                  <div className="mb-3 lcard-body">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Enter Car Brand
                    </label>
                    <input
                      type="email"
                      className="form-control shadow-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="email"
                      //   value={login.email}
                      //   onChange={handelChange}
                    />
                  </div>
                  <div className="mb-3 lcard-body">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Enter Car Model
                    </label>
                    <input
                      type="password"
                      className="form-control shadow-none"
                      id="exampleInputPassword1"
                      name="password"
                      //   value={login.password}
                      //   onChange={handelChange}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary mb-2"
                      //   onClick={handelLoginClick}
                    >
                      Save Entry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-2 toggleDiv">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="web">User Dashboard</ToggleButton>
          <ToggleButton value="android">Owner Dashboard</ToggleButton>
        </ToggleButtonGroup>
        <div>
          <strong className="UserDetails">Total Users Details</strong>
          <UserTable />
        </div>
      </div>
      <div className="container">
        <strong>Total Number of Cars</strong>
        <div className="car-card">
          <div className="img-wrapper">
            <img className="card-img-top" alt="card" src="carimage" />
          </div>
          <div style={{ width: "65%" }}>
            <strong>carName</strong>
            <p className="car-transmission-fuel-seat">
              transmissionType . fuelType . seats
            </p>
            <p className="car-rating-kmdriven">4 star, 12k kms driven</p>
          </div>
          <div>
            <strong>Price</strong>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
