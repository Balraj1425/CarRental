import React from "react";
import "../Alllogin/Alllogin.css";
import gif from "../components/images/movingif.gif";
import { useNavigate } from "react-router-dom";

export default function Alllogin() {
  const navigate = useNavigate();
  const navigatetoUserLogin = () => {
    navigate("/login");
  };
  const navigatetoAdminLogin = () => {
    navigate("/adminlogin");
  };
  const navigatetoOwnerLogin = () => {
    navigate("/ownerlogin");
  };
  return (
    <>
      <div className="container-fluid firstalllogindiv ">
        <div className="centered">
          <div className="card d-flex flex-row">
            <div className="col-sm-6">
              <div className="login-as">
                <h4>Login As</h4>
              </div>
              <div className="d-flex flex-column login-div">
                <button
                  type="button"
                  class="btn btn-warning mt-2"
                  onClick={navigatetoAdminLogin}
                >
                  Admin
                </button>

                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={navigatetoOwnerLogin}
                >
                  Owner
                </button>

                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={navigatetoUserLogin}
                >
                  User
                </button>
              </div>
            </div>
            <div className="col-sm-6 img-div ">
              <div className="">
                <img src={gif} className="img-div" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
