import React, { useEffect } from "react";
import axios from "axios";
import "../aboutus/Aboutus.css";

export default function Aboutus() {
  axios.get("http://localhost:3001/aboutus").then((res) => {
    console.log("res", res);
  });
  return (
    <div className="firstaboutusdiv">
      <h1>hi this is Aboutus</h1>
    </div>
  );
}
