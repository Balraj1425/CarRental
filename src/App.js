import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import SearchCar from "./components/search/searchCar";

// import SearchResult from "./components/search/searchResult";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<SearchCar />}></Route>
        </Routes>
      </Router>
      {/* <Navbar />
      
      <SearchResult /> */}
    </>
  );
}

export default App;
