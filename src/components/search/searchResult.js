import { useState } from "react";
import * as React from "react";
import CarCard from "./carCard";
import "./searchResult.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import axios from "axios";
import { useEffect } from "react";

const SearchResult = (props) => {
  // console.log(props);
  const searchResults = props.resultCarData;
  // console.log("final data");
  console.log("Final Result:", searchResults);

  const searchCarData = props.searchCarData; //chahiye

  // axios.get("http://localhost:3001/home").then((res) => {
  //   console.log("you are in home search ui");
  // });

  const [filterData, setFilterData] = useState({
    seats: "",
    transmission: "",
    cartypes: "",
  });

  // let details;
  useEffect(() => {
    const filterParameters = { ...filterData, ...searchCarData };
    axios
      .post("http://localhost:3001/filterdata", filterParameters)
      .then((res) => {
        console.log(res);

        props.onFilterData(res.data);
      });
  }, [filterData]);

  const handleChange = (event, name) => {
    const { value } = event.target;
    setFilterData({ ...filterData, [name]: value });

    // console.log(filterData);
    // console.log(searchCarData);
    props.onFilterData([]);

    // console.log(filterData);
    
  };

  return (
    <div className="container-fluid firstsearcresultdiv">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
            <div className="card filter-card ">
              <label htmlFor="searchText" class="form-label ">
                Car Types:
              </label>
              <ToggleButtonGroup
                color="primary"
                value={filterData.cartypes}
                className="filter-types"
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
                className="filter-types"
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
                className="filter-types mb-2"
                exclusive
                onChange={(event) => handleChange(event, "transmission")}
              >
                <ToggleButton value="Manual">Manual</ToggleButton>
                <ToggleButton value="Automatic">Automatic</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <div className="col-lg-9 col-md-6 col-sm-12 mt-2">
            {searchResults.map((item) => (
              <CarCard
                key={item.carId}
                carName={item.carName}
                carImage={item.carImage}
                seats={item.noOfSeats}
                transmissionType={item.transmissionType}
                fuelType={item.fuelType}
                price={item.price}
                searchCarData={searchCarData}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchResult;
