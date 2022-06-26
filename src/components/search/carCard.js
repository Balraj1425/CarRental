import { Fragment } from "react";
import "./searchResult.css";
import { Link } from "react-router-dom";

const CarCard = (props) => {
  return (
    <Fragment>
      <div className="car-card">
        <div className="img-wrapper">
          <img class="card-img-top" alt="card" src={props.carImage} />
        </div>
        <div style={{ width: "65%" }}>
          <strong>{props.carName}</strong>
          <p className="car-transmission-fuel-seat">
            {props.transmissionType} . {props.fuelType} . 5
          </p>
          <p className="car-rating-kmdriven">4 star, 12k kms driven</p>
        </div>
        <div>
          <strong>{props.price}</strong>
          <br />

          <button className="btn btn-outline-primary" onClick="">
            Book Now
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default CarCard;
