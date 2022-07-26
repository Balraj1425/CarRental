import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../register/Register.css";
import pic from "../../components/images/register.gif";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };
  const registerOwner = async function (e) {
    try {
      e.preventDefault();
      if (
        !register.name ||
        !register.email ||
        !register.phone ||
        !register.password
      ) {
        alert("Please fill all the details");
      } else {
        const responce = await axios.post(
          "http://localhost:3001/ownerregister",
          register
        );
        alert(responce.data.message);
        navigate("/ownerlogin");
      }
    } catch (error) {
      console.log("Unable to send request to backend");
    }
  };

  return (
    <div className="blankDiv">
      <div className="container ">
        <div className="row">
          <div className="col-sm-7 ">
            <div className="card Picdiv">
              <img src={pic} alt="signupPic" />
            </div>
          </div>
          <div className="col-sm-5 registerDiv">
            <div class="card p-5">
              <h4 className="h4">Register Here</h4>
              <br></br>
              <div class="mb-3">
                <label for="formGroupName" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={register.name}
                  onChange={handelChange}
                  class="form-control shadow-none"
                  id="formGroupExampleName"
                  placeholder="Enter your Name"
                />
              </div>
              <div class="mb-3">
                <label for="formGroupusername" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={register.email}
                  onChange={handelChange}
                  class="form-control shadow-none"
                  id="formGroupusername"
                  placeholder="Enter your Email"
                />
              </div>
              <div class="mb-3">
                <label for="formGroupphone" class="form-label">
                  Mobile No
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={register.phone}
                  onChange={handelChange}
                  class="form-control shadow-none"
                  id="formGroupExamplePhone"
                  placeholder="Enter your Mobile No"
                />
              </div>

              <div class="mb-3">
                <label for="formGrouppassword" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={register.password}
                  onChange={handelChange}
                  class="form-control shadow-none"
                  id="formGroupExamplepassword"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="button"
                class="btn btn-success"
                onClick={registerOwner}
              >
                Register
              </button>
              <div className="noAccount mt-5">
                <h6>
                  Already have your Account
                  <Link to="/ownerlogin"> Login </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
