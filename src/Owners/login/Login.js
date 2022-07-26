import React, { useState } from "react";
import "../login/Login.css";
import pic from "../../components/images/giphy.gif";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const handelClick = async function (e) {
    try {
      e.preventDefault();
      if (!login.email || !login.password) {
        alert("Please fill the Details");
      } else {
        const responce = await axios.post(
          "http://localhost:3001/ownerlogin",
          login
        );
        console.log("i am here");

        alert(responce.data.message);
      }
      navigate("/ownerhome");
    } catch (error) {
      alert("Unable to login");
    }
  };

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
                  name="email"
                  value={login.email}
                  onChange={handelChange}
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
                  name="password"
                  value={login.password}
                  onChange={handelChange}
                  class="form-control shadow-none"
                  id="formGroupExamplepassword"
                  placeholder="Enter your password"
                />
              </div>
              <Link to="/home">
                <button
                  type="button"
                  class="btn btn-success "
                  onClick={handelClick}
                >
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
