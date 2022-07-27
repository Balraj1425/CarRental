import React, { useState } from "react";
import "../OwnerRentData/OwnerRentData.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const OwnerRentData = (props) => {
  const { state } = useLocation();

  const userData = state.state.userData;

  const [carDetails, setCarDetails] = useState({
    carBrand: "",
    carModel: "",
    kmDriven: "",
    fuelType: "",
    transmissionType: "",
    noOfSeats: "",
    carLocation: "",
    carType: "",
    carNumber: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    // if (name == "carNumber" || name == "carLocation"){
    //   value = value.toUpperCase();
    // }
    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  let userFinalData = { ...userData };
  // userFinalData.ownerId = userFinalData._id;
  let newData = {
    name: userFinalData.name,
    email: userFinalData.email,
    phone: userFinalData.phone,
    ownerId: userFinalData._id,
  };

  const finalData = { ...carDetails, ...newData };

  const handelClick = async function (e) {
    try {
      e.preventDefault();
      if (
        !carDetails.carBrand ||
        !carDetails.carModel ||
        !carDetails.kmDriven ||
        !carDetails.fuelType ||
        !carDetails.transmissionType ||
        !carDetails.noOfSeats ||
        !carDetails.carLocation ||
        !carDetails.carType ||
        !carDetails.carNumber
      ) {
        alert("Please fill all the Details");
      } else {
        finalData.carLocation = finalData.carLocation.toUpperCase();
        finalData.carNumber = finalData.carNumber.toUpperCase();
        const responce = await axios.post(
          "http://localhost:3001/insertcar",
          finalData
        );
        alert(responce.data.message);
      }
    } catch (error) {
      alert("Unable to insert data");
    }
  };
  return (
    <>
      <div className="blankDiv">
        <div className="container ">
          <div className="row">
            <div className="col-sm-12 registerDiv">
              <div class="card p-5">
                <h4 className="h4">Register Your Car</h4>
                <br></br>
                <div className="d-flex flex-col">
                  <div class="mb-3 col-sm-6 margin">
                    <label for="formGroupName" class="form-label">
                      Brand/Company
                    </label>
                    <input
                      type="text"
                      class="form-control shadow-none"
                      name="carBrand"
                      value={carDetails.carBrand}
                      onChange={handelChange}
                      id="formGroupExampleName"
                      placeholder="Enter car Brand/Company"
                    />
                  </div>
                  <div class="mb-3 col-sm-6 margin">
                    <label for="formGroupusername" class="form-label">
                      Model
                    </label>
                    <input
                      type="text"
                      class="form-control shadow-none"
                      name="carModel"
                      onChange={handelChange}
                      value={carDetails.carModel}
                      id="formGroupusername"
                      placeholder="Enter car Model"
                    />
                  </div>
                </div>
                <div className="d-flex flex-col">
                  <div class="mb-3 col-sm-6 margin">
                    <label for="formGroupName" class="form-label">
                      Km Driven
                    </label>
                    <input
                      type="text"
                      class="form-control shadow-none"
                      name="kmDriven"
                      onChange={handelChange}
                      value={carDetails.kmDriven}
                      id="formGroupExampleName"
                      placeholder="Enter car Km Driven"
                    />
                  </div>
                  <div class="mb-3 col-sm-6 margin">
                    <label for="formGroupusername" class="form-label">
                      Fuel Type
                    </label>
                    <select
                      class="form-select"
                      name="fuelType"
                      onChange={handelChange}
                      aria-label="Default select example"
                    >
                      <option selected>Choose Fuel Type</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Gas">Gas</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex flex-col">
                  <div class="mb-3 col-sm-6 margin">
                    <label for="formGroupName" class="form-label">
                      Transmission
                    </label>
                    <select
                      class="form-select"
                      onChange={handelChange}
                      name="transmissionType"
                      aria-label="Default select example"
                    >
                      <option selected>Choose Transmission</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>
                  <div class="mb-3 col-sm-6 margin">
                    <label for="formGroupusername" class="form-label">
                      No of Seats
                    </label>
                    <select
                      class="form-select"
                      onChange={handelChange}
                      name="noOfSeats"
                      aria-label="Default select example"
                    >
                      <option selected>Choose No of Seats</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex flex-col ">
                  <div class="mb-3 col-sm-6 margin">
                    <label for="formGroupName" class="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      class="form-control shadow-none"
                      onChange={handelChange}
                      name="carLocation"
                      value={carDetails.carLocation}
                      id="formGroupExampleName"
                      placeholder="Enter car Location"
                    />
                  </div>
                  <div class="mb-3 col-sm-6 margin">
                    <label for="formGroupusername" class="form-label">
                      Car Type
                    </label>
                    <select
                      class="form-select"
                      onChange={handelChange}
                      name="carType"
                      aria-label="Default select example"
                    >
                      <option selected>Choose Car Type</option>
                      <option value="SUV">SUV</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Hatchback">Hatchback</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex flex-col">
                  <div class="mb-3 col-sm-6 margin">
                    <label for="formGroupName" class="form-label">
                      Car Number
                    </label>
                    <input
                      type="text"
                      class="form-control shadow-none"
                      onChange={handelChange}
                      name="carNumber"
                      value={carDetails.carNumber}
                      id="formGroupExampleName"
                      placeholder="Enter car Number Plate"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={handelClick}
                >
                  Register
                </button>
                <div className="noAccount mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerRentData;
