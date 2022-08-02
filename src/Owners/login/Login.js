import React, { useEffect, useState } from "react";
import "../login/Login.css";
import pic from "../../components/images/giphy.gif";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [validFormData, setValidFormData] = useState(false);
  const [validNavigate, setValidNavigate] = useState(false);
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

  useEffect(() => {
    if (validFormData == true) {
      axios.post("http://localhost:3001/ownerlogin", login).then((res) => {
        if (res) {
          console.log(res);
          res.data.login = "owner";
          res.data.isLoggedIn = true;
          setUserData(res.data);
          props.onLogIn(res.data);
          if (res.status === 200) {
            setValidNavigate(true);
          }
        } else {
          alert("Wrong Credentials");
        }
      });
    }
  }, [validFormData]);

  useEffect(() => {
    if (userData != null && validNavigate == true) {
      if (validNavigate == true) {
        navigate("/ownerhome", { state: { userData } });
      } else {
        console.log("loading......");
      }
    }
  }, [userData, validNavigate]);

  const handelClick = async function (e) {
    try {
      e.preventDefault();
      if (!login.email || !login.password) {
        alert("Please fill the Details");
      } else {
        setValidFormData(true);
      }
    } catch (error) {
      console.log(error);
      alert("Unable to login");
    }
  };

  return (
    <div className="fullbody">
      <div className="blank"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div className="card LoginPic">
              <div className="card-body">
                <img src={pic} className="img-size" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="card p-5">
              <br></br>
              <div className="mb-3">
                <label htmlFor="formGroupusername" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={login.email}
                  onChange={handelChange}
                  className="form-control shadow-none"
                  id="formGroupusername"
                  placeholder="Enter your Email"
                  required="required"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGrouppassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={handelChange}
                  className="form-control shadow-none"
                  id="formGroupExamplepassword"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-success "
                onClick={handelClick}
              >
                Login
              </button>

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
