import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import OLogin from "../src/Owners/login/Login";
import Aboutus from "./components/aboutus/Aboutus";
import Contactus from "./components/contactus/Contactus";
import Home from "./components/home/Home";
import SearchResult from "./components/search/searchResult";
import SearchCar from "./components/search/searchCar";
import CarDetailsPage from "./components/carDetailsPage/CarDetailsPage";
import Alllogin from "./Alllogin/Alllogin";
import ORegister from "../src/Owners/register/Register";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (data) =>{
    setIsLoggedIn(data)
  }
  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route exact path="/" element={<Login onLogIn={loginHandler}/>}></Route>
          <Route path="/login" element={<Login onLogIn={loginHandler}/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<SearchCar />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/searchresult" element={<SearchResult />}></Route>
          <Route path="/cardetailspage" element={<CarDetailsPage />}></Route>
          <Route path="/alllogin" element={<Alllogin />}></Route>
          <Route path="/ownerlogin" element={<OLogin />}></Route>
          <Route path="/ownerregister" element={<ORegister />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
