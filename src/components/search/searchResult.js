import { useState } from "react";
import * as React from "react";
import CarCard from "./carCard";
import "./searchResult.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import axios from "axios";

const SearchResult = (props) => {
  console.log(props);
  const searchResults = props.resultCarData;
  const searchCarData = props.searchCarData;

  const [filterData, setFilterData] = useState({
    seats: "",
    transmission: "",
    cartypes: "",
  });

  const handleChange = (event, name) => {
    const { value } = event.target;
    setFilterData({ ...filterData, [name]: value });
    const filterParameters = { ...filterData, ...searchCarData };

    console.log(filterData);
    console.log(searchCarData);

    // console.log(filterData);
    axios
      .post("http://localhost:3001/filterdata", filterParameters)
      .then((res) => {
        console.log("result of filterd data");

        console.log(res);
        props.resultCarData = res.data;
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="card">
            <label htmlFor="searchText" class="form-label">
              Car Types:
            </label>
            <ToggleButtonGroup
              color="primary"
              value={filterData.cartypes}
              exclusive
              onChange={(event) => handleChange(event, "cartypes")}
            >
              <ToggleButton value="hatchback">HatchBack</ToggleButton>
              <ToggleButton value="suv">SUV</ToggleButton>
              <ToggleButton value="sedan">Sedan</ToggleButton>
            </ToggleButtonGroup>
            <label htmlFor="searchText" class="form-label">
              Seats :
            </label>
            <ToggleButtonGroup
              color="primary"
              value={filterData.seats}
              exclusive
              onChange={(event) => handleChange(event, "seats")}
            >
              <ToggleButton value="5">5</ToggleButton>
              <ToggleButton value="6">6</ToggleButton>
              <ToggleButton value="7">7</ToggleButton>
            </ToggleButtonGroup>
            <label htmlFor="searchText" class="form-label">
              Transmission:
            </label>
            <ToggleButtonGroup
              color="primary"
              value={filterData.transmission}
              exclusive
              onChange={(event) => handleChange(event, "transmission")}
            >
              <ToggleButton value="Manual">Manual</ToggleButton>
              <ToggleButton value="Automatic">Automatic</ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        <div className="col-lg-9">
          {searchResults.map((item) => (
            <CarCard
              key={item.carId}
              carName={item.carName}
              carImage={item.carImage}
              transmissionType={item.transmissionType}
              fuelType={item.fuelType}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchResult;
