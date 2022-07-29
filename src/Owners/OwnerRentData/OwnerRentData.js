import React, { useEffect, useState } from "react";
import "../OwnerRentData/OwnerRentData.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const OwnerRentData = (props) => {
  const { state } = useLocation();

  const userData = state.state.userData;

  const [models, setmodels] = useState();
  const [carBrands, setCarBrands] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
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
    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  let userFinalData = { ...userData };
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

  useEffect(() => {
    try {
      axios.get("http://localhost:3001/carBrands").then((response) => {
        console.log(response);
        setCarBrands(response.data);
        setDataLoaded(true);
      });
    } catch (error) {
      console.log("error");
    }
  }, [dataLoaded]);

  useEffect(() => {
    console.log(selectedBrand);
    console.log(carBrands)
    for (let i = 0; i < carBrands.length; i++){
      if(carBrands[i].brand === selectedBrand){
        setmodels(carBrands[i].model);
      }
    }
    // if(selectedBrand != ""){
    //   try {
    //     axios.post("http://localhost:3001/carmodels", {"carBrand": selectedBrand}).then((response) => {
    //       console.log(response);
    //       setmodels(response.data.model);
    //     })
    //   } catch (error) {
    //     console.log("error")
    //   }
    // }
  }, [selectedBrand])

  const brandhandelChange = (e) => {
    setSelectedBrand(e.target.value);
    const { name, value } = e.target;
    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  if (!dataLoaded) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  } else {
    return (
      <>
        <div className="blankDiv">
          <div className="container ">
            <div className="row">
              <div className="col-sm-12 registerDiv">
                <div className="card p-5">
                  <h4 className="h4">Register Your Car</h4>
                  <br></br>
                  <div className="d-flex flex-col">
                    <div className="mb-3 col-sm-6 margin">
                      <label htmlFor="formGroupusername" className="form-label">
                        Brand/Company
                      </label>
                      <select
                        className="form-select"
                        onChange={brandhandelChange}
                        name="carBrand"
                        aria-label="Default select example"
                      >
                        <option selected>Choose Your Brand</option>
                        {carBrands.map((item, index) => (
                          <option key={index} value={item.brand}>
                            {item.brand}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3 col-sm-6 margin">
                      <label htmlFor="formGroupusername" className="form-label">
                        Model
                      </label>
                      <select
                        className="form-select"
                        onChange={handelChange}
                        name="carModel"
                        aria-label="Default select example"
                      >
                        <option selected>Choose Your Model</option>
                        {models &&
                          models.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-col">
                    <div className="mb-3 col-sm-6 margin">
                      <label htmlFor="formGroupName" className="form-label">
                        Km Driven
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        name="kmDriven"
                        onChange={handelChange}
                        value={carDetails.kmDriven}
                        id="formGroupExampleName"
                        placeholder="Enter car Km Driven"
                      />
                    </div>
                    <div className="mb-3 col-sm-6 margin">
                      <label htmlFor="formGroupusername" className="form-label">
                        Fuel Type
                      </label>
                      <select
                        className="form-select"
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
                    <div className="mb-3 col-sm-6 margin">
                      <label htmlFor="formGroupName" className="form-label">
                        Transmission
                      </label>
                      <select
                        className="form-select"
                        onChange={handelChange}
                        name="transmissionType"
                        aria-label="Default select example"
                      >
                        <option selected>Choose Transmission</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                      </select>
                    </div>
                    <div className="mb-3 col-sm-6 margin">
                      <label htmlFor="formGroupusername" className="form-label">
                        No of Seats
                      </label>
                      <select
                        className="form-select"
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
                    <div className="mb-3 col-sm-6 margin">
                      <label htmlFor="formGroupName" className="form-label">
                        Location
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        onChange={handelChange}
                        name="carLocation"
                        value={carDetails.carLocation}
                        id="formGroupExampleName"
                        placeholder="Enter car Location"
                      />
                    </div>
                    <div className="mb-3 col-sm-6 margin">
                      <label htmlFor="formGroupusername" className="form-label">
                        Car Type
                      </label>
                      <select
                        className="form-select"
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
                    <div className="mb-3 col-sm-6 margin">
                      <label htmlFor="formGroupName" className="form-label">
                        Car Number
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none"
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
                    className="btn btn-success"
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
  }
};

export default OwnerRentData;
