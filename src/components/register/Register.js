import React from "react";
import "../register/Register.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import pic from "../images/register.gif";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handelChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log("name", name, "value", value);

    setUser({ ...user, [name]: value });
  };
  const handelButton = (e) => {
    e.preventDefault();

    if (
      user.name &&
      user.email &&
      user.phone &&
      user.username &&
      user.password === user.cpassword
    ) {
      axios.post("http://localhost:3001/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
        // console.log(res);
      });
    } else {
      if (user.password !== user.cpassword) {
        alert("Password Didn't Matched");
      } else {
        alert("Fill all the details");
      }
    }
  };
  return (
    <>
      <div className="container-fluid firstregisterdiv">
        <div className="col-sm-12 d-flex container pt-2">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <h1>Let's make renting easy</h1>
            <div className="card Picdiv">
              <img src={pic} alt="signupPic" />
            </div>
          </div>
          <div className=" col-lg-5 col-md-12 col-sm-5 register-wrapper">
            <div className="card Rcard-body">
              <form>
                <h3 className="register">Register</h3>
                <div className="mb-3 form-input">
                  <label htmlFor="exampleInputname" className="form-label">
                    Name :
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none "
                    id="exampleInputname"
                    aria-describedby="nameHelp"
                    name="name"
                    value={user.name}
                    onChange={handelChange}
                  />
                </div>
                <div className="mb-3 form-input">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address :
                  </label>
                  <input
                    type="email"
                    className="form-control shadow-none "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={user.email}
                    onChange={handelChange}
                  />
                </div>
                <div className="mb-3 form-input">
                  <label htmlFor="exampleInputUsername" className="form-label">
                    Username :
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="exampleInputUsername"
                    aria-describedby="usernameHelp"
                    name="username"
                    value={user.username}
                    onChange={handelChange}
                  />
                </div>
                <div className="mb-3 form-input">
                  <label htmlFor="exampleInputMobile" className="form-label">
                    Phone :
                  </label>
                  <input
                    type="tel"
                    className="form-control shadow-none "
                    id="exampleInputMobile"
                    aria-describedby="MobileHelp"
                    name="phone"
                    value={user.phone}
                    onChange={handelChange}
                  />
                </div>
                <div className="mb-3 form-input">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password :
                  </label>
                  <input
                    type="password"
                    className="form-control shadow-none"
                    id="exampleInputPassword1"
                    name="password"
                    value={user.password}
                    onChange={handelChange}
                  />
                </div>
                <div className="mb-3 form-input">
                  <label htmlFor="exampleInputPassword2" className="form-label">
                    Confirm Password :
                  </label>
                  <input
                    type="password"
                    className="form-control shadow-none"
                    id="exampleInputPassword2"
                    name="cpassword"
                    value={user.cpassword}
                    onChange={handelChange}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    onClick={handelButton}
                  >
                    Register
                  </button>
                </div>
                <div>
                  <h6 className="d-flex justify-content-center mt-3 ">
                    <span>Already Have an Account </span>&nbsp;&nbsp;
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <span> Login Here</span>
                    </Link>
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
