import { Fragment, useState } from "react";
import "./searchCar.css";
import axios from "axios";
import SearchResult from "./searchResult";
import { useNavigate } from "react-router-dom";

const SearchCar = () => {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);
  const [searchCarData, setSearchCar] = useState({
    pickuplocation: "",
    datefrom: "",
    dateto: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setSearchCar({
      ...searchCarData,
      [name]: value,
    });
  };
  const [resultCarData, setResultCarData] = useState([]);

  const searchCarHandler = (e) => {
    e.preventDefault();
    if (
      searchCarData.datefrom == "" ||
      searchCarData.dateto == "" ||
      searchCarData.pickuplocation == ""
    ) {
      alert("please enter all details");
    } else {
      searchCarData.pickuplocation = searchCarData.pickuplocation.toUpperCase();
      axios
        .post("http://localhost:3001/searchCars", searchCarData)
        .then((res) => {
          // navigate("/searchResult");
          console.log(res.data);
          setResultCarData(res.data);
          setShowResult(true);
        })
        .catch((err) => {
          // Handle error
          console.log(err);
          navigate("/login");
        });
    }
  };
  const saveFilterDataHandler = (data) => {
    setResultCarData(data);
  };

  return (
    <Fragment>
      {!showResult && (
        <div className="search-car">
          <label htmlFor="searchText" className="form-label">
            Select Destination
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Pick a city"
            id="searchText"
            value={searchCarData.pickuplocation}
            name="pickuplocation"
            onChange={handelChange}
          />
          <label htmlFor="searchText" className="form-label">
            From:
          </label>
          <input
            type="date"
            className="form-control"
            value={searchCarData.datefrom}
            name="datefrom"
            onChange={handelChange}
          />
          <label htmlFor="searchText" className="form-label">
            To:
          </label>
          <input
            type="date"
            className="form-control"
            value={searchCarData.dateto}
            name="dateto"
            onChange={handelChange}
          />
          <button onClick={searchCarHandler}>Find Cars</button>
        </div>
      )}
      {showResult && (
        <SearchResult
          resultCarData={resultCarData}
          searchCarData={searchCarData}
          onFilterData={saveFilterDataHandler}
        />
      )}
    </Fragment>
  );
};
export default SearchCar;
