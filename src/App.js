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
import OwnerHome from "./Owners/Home/OwnerHome";
import OwnerRentData from "./Owners/OwnerRentData/OwnerRentData";
import OwnerProfile from "./Owners/Profile/OwnerProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserData, setLoggedInUserData] = useState();
  const [userType, setUserType] = useState();

  const loginHandler = (data) => {
    setIsLoggedIn(data.isLoggedIn);
    setLoggedInUserData(data);
    if (data.login == "owner") {
      setUserType("owner");
    } else {
      setUserType("user");
    }
  };

  const logoutHandler = (data) => {
    setIsLoggedIn(data);
  };

  return (
    <>
      <Router>
        <Navbar
          isLoggedIn={isLoggedIn}
          loggedInUserData={loggedInUserData}
          userType={userType}
          onLogout={logoutHandler}
        />
        <Routes>
          <Route exact path="/" element={<Alllogin />}></Route>
          <Route
            path="/login"
            element={<Login onLogIn={loginHandler} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<SearchCar />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/searchresult" element={<SearchResult />}></Route>
          <Route path="/cardetailspage" element={<CarDetailsPage />}></Route>
          <Route path="/alllogin" element={<Alllogin />}></Route>
          <Route
            path="/ownerlogin"
            element={<OLogin onLogIn={loginHandler} />}
          ></Route>
          <Route path="/ownerregister" element={<ORegister />}></Route>
          <Route path="/ownerhome" element={<OwnerHome />}></Route>
          <Route path="/ownerfillform" element={<OwnerRentData />}></Route>
          <Route
            path="/ownerprofile"
            element={<OwnerProfile loggedInUserData={loggedInUserData} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
