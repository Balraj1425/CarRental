import React from "react";
import "../OwnerRentData/OwnerRentData.css";

const OwnerRentData = () => {
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
                      id="formGroupExampleName"
                      placeholder="Enter car Number Plate"
                    />
                  </div>
                </div>
                <button type="button" class="btn btn-success">
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
