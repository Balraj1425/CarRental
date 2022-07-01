import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Aboutus from "./components/aboutus/Aboutus";
import Contactus from "./components/contactus/Contactus";
import Home from "./components/home/Home";
import SearchResult from "./components/search/searchResult";
import SearchCar from "./components/search/searchCar";
import CarDetailsPage from "./components/carDetailsPage/CarDetailsPage";
import Alllogin from "./Alllogin/Alllogin";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<SearchCar />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/searchresult" element={<SearchResult />}></Route>
          <Route path="/cardetailspage" element={<CarDetailsPage />}></Route>
          <Route path="/alllogin" element={<Alllogin />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
