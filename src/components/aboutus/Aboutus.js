import React, { useEffect } from "react";
import axios from "axios";
import "../aboutus/Aboutus.css";
import { useNavigate } from "react-router-dom";

export default function Aboutus() {
  const navigate = useNavigate();
  const config = {
    headers: {
      username: sessionStorage.getItem("username"),
      access_token: sessionStorage.getItem("access_token"),
    },
  };
  axios
    .get("http://localhost:3001/aboutus", config)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => {
      // Handle error
      console.log(err);
      navigate("/login");
    });
  return (
    <div className="firstaboutusdiv">
      <h1>hi this is Aboutus</h1>
    </div>
  );
}
