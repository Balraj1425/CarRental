import { Fragment, useState } from "react";
import "./searchResult.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CarCard = (props) => {
  const navigate = useNavigate();
  const carDetailspage = () => {
    navigate("/cardetailspage", { state: { props } });
  };
  console.log("props==>", props);
  // console.log("searchCarData", props.searchCarData);

  return (
    <Fragment>
      <div className="car-card">
        <div className="img-wrapper">
          <img class="card-img-top" alt="card" src={props.carImage} />
        </div>
        <div style={{ width: "65%" }}>
          <strong>{props.carName}</strong>
          <p className="car-transmission-fuel-seat">
            {props.transmissionType} . {props.fuelType} . {props.seats}
          </p>
          <p className="car-rating-kmdriven">4 star, 12k kms driven</p>
        </div>
        <div>
          <strong>{props.price}</strong>
          <br />
          <button className="btn btn-outline-primary" onClick={carDetailspage}>
            Book Now
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default CarCard;
