import React from "react";
import "../Home/OwnerHome.css";
import image from "../../components/images/hero.png";
import dealer from "../../components/images/dealers.jpg";
import tracking from "../../components/images/tracking.jpg";
import money from "../../components/images/money.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const OwnerHome = () => {
  const navigate = useNavigate();
  const fillForm = () => {
    navigate("/ownerfillform");
  };
  return (
    <>
      <div className="d-flex head-div">
        <div className="col-lg-6  text-content">
          <h1>
            Rent <span className="highlight">your</span> car <br></br>
            Earn
            <span className="highlight"> Money</span>
          </h1>
        </div>
        <div className="col-lg-6 head-img">
          <img src={image} className="head-img"></img>
        </div>
      </div>
      <div className="line"></div>
      <div className="div2">
        <h2>Features</h2>
        <h3>Better to rent your car insted of storing in garage</h3>
      </div>
      <div className="d-flex p-3 ">
        <div className="container d-flex flex-row align-items-center ">
          <div className="col-sm-6 p-3">
            <sapn className="fontawsome">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </sapn>
            <h3>Rent us your car</h3>
            <p className="para">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type ...
            </p>
          </div>
          <div className="col-sm-6">
            <img src={dealer} className="content-img"></img>
          </div>
        </div>
      </div>

      <div className="d-flex p-3 ">
        <div className="container d-flex flex-row align-items-center ">
          <div className="col-sm-6">
            <img src={tracking} className="content-img"></img>
          </div>
          <div className="col-sm-6 p-3 ">
            <sapn className="fontawsome">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </sapn>
            <h3>Get track of your car</h3>
            <p className="para">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type ...
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex p-3 money-div">
        <div className="container d-flex flex-row align-items-center ">
          <div className="col-sm-6 p-3">
            <sapn className="fontawsome">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </sapn>
            <h3>Earn money on rent</h3>
            <p className="para">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type ...
            </p>
          </div>
          <div className="col-sm-6 ">
            <img src={money} className="content-img"></img>
          </div>
        </div>
      </div>

      <div className="middle-div">
        <h4>NOT SURE YET?</h4>
        <h2>Thousand of Rentals are already making their lifes simpler.</h2>
      </div>
      <div className="container d-flex crowsel ">
        <div
          id="carouselExampleCaptions"
          class="carousel slide "
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h3>Amit</h3>
              <br></br>
              <br></br>
              <h5>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary
              </h5>
            </div>
            <div class="carousel-item">
              <h3>Vineet</h3>
              <br></br>
              <br></br>
              <h5>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary
              </h5>
            </div>
            <div class="carousel-item">
              <h3>Balraj</h3>
              <br></br>
              <br></br>
              <h5>
                img elements must have an alt prop, either with meaningful text,
                or an empty string for decorative images .lets use this aap and
                rent as mny as car you can st have an alt prop, either with
                meaningful text, or an empty string for decorative
              </h5>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
          </button>
        </div>
      </div>
      <div className="Login-btn">
        <button className="btn btn-success btn-lg" onClick={fillForm}>
          Start Renting
        </button>
      </div>
    </>
  );
};

export default OwnerHome;
