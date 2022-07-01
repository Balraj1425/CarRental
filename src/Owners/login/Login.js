import React, { useState } from "react";
import "../login/Login.css";
import pic from "../../components/images/giphy.gif";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="fullbody">
      <div className="blank"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div class="card LoginPic">
              <div class="card-body">
                <img src={pic} class="img-size" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div class="card p-5">
              <br></br>
              <div class="mb-3">
                <label for="formGroupusername" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="formGroupusername"
                  placeholder="Enter your Email"
                  required="required"
                />
              </div>
              <div class="mb-3">
                <label for="formGrouppassword" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control shadow-none"
                  id="formGroupExamplepassword"
                  placeholder="Enter your password"
                />
              </div>
              <Link to="/home">
                <button type="button" class="btn btn-success " onClick="">
                  Login
                </button>
              </Link>
              <div className="noAccount mt-5">
                <h6>
                  Don't have your Account
                  <Link to="/ownerregister"> Register Here</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
