import React from "react";
import "../carDetailsPage/CarDetailsPage.css";
import carImage from "../images/creta.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CarDetailsPage(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="img-wrapper">
                <img class="card-img-top" alt="card" src={carImage} />
              </div>
              <div className="col-sm-12 d-flex mt-4">
                <div className="col-sm-2 icon-alignment">
                  <div className="start-icon"></div>
                </div>
                <div className="col-sm-10 trip-date-details">
                  <span>Mon, 27 Jun, 12:00 AM</span>
                  <h6>Delhi</h6>
                </div>
              </div>
              <div className="connector"></div>
              <div className="col-sm-12 d-flex ">
                <div className="col-sm-2 icon-alignment">
                  <div className="end-icon"></div>
                </div>
                <div className="col-sm-10 trip-date-details">
                  <span>Mon, 30 Jun, 12:00 AM</span>
                  <h6>Delhi</h6>
                </div>
              </div>
              <div className="fuel-type">
                <span className="fuel-icon">
                  <FontAwesomeIcon icon={faGasPump} />
                </span>
                <span className="fuel-detail">Unlimited Km without fuel</span>
              </div>
              <div className="star-icon">
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className="star-detail">4.5 (12) · 6,500 kms driven</span>
              </div>
              <div className="container  precaution">
                <div className="container">
                  You will get a clean and sanitized car. Exact car location
                  will be shared post-booking
                </div>
              </div>
              <div className="aggriments-policy">
                <div className="keep-in-mind">Keep In Mind</div>
                <div className="dl-policy">
                  <span>
                    <FontAwesomeIcon icon={faIdCard} />
                  </span>
                  <span className="dl-content">Driving License Mandatory</span>
                </div>
                <div className="fare-fuel-policy">
                  <div className="fuel-icon-content">
                    <span className="fare-fuel-policy-content1">
                      <FontAwesomeIcon icon={faGasPump} />
                    </span>
                    Fare & Fuel Policy
                  </div>
                  <div className="fare-fuel-policy-content2">
                    Fare is inclusive of all taxes. Kindly return the car at the
                    same fuel level as the trip start time
                  </div>
                  <Link to="">
                    <div className="seeDetails"> See Details</div>
                  </Link>
                </div>
                <div className="fare-fuel-policy">
                  <div className="fuel-icon-content">
                    <span className="fare-fuel-policy-content1">
                      <FontAwesomeIcon icon={faBan} />
                    </span>
                    Cancellation Policy
                  </div>
                  <div className="fare-fuel-policy-content2">
                    Hassle free cancellations and refunds at nominal charges
                  </div>
                  <Link to="">
                    <div className="seeDetails"> See Details</div>
                  </Link>
                </div>
                <div className="fare-fuel-policy">
                  <div className="fuel-icon-content">
                    <span className="fare-fuel-policy-content1">
                      <FontAwesomeIcon icon={faHandshake} />
                    </span>
                    Agreement policy
                  </div>
                  <div className="d-flex">
                    <div className="fare-fuel-policy-content2">
                      I hereby agree to the terms and conditions of the Lease
                      Agreement with Host
                    </div>
                    <div className="aggrement-Checkbox">
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckCheckedDisabled"
                          checked
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckCheckedDisabled"
                        >
                          I Agree
                        </label>
                      </div>
                    </div>
                  </div>
                  <Link to="">
                    <div className="seeDetails"> See Details</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <h1>Payment details</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
