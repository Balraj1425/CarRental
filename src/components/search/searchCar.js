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
    setShowResult(true);
    axios
      .post("http://localhost:3001/searchCars", searchCarData)
      .then((res) => {
        // navigate("/searchResult");
        console.log(res.data);
        setResultCarData(res.data);
      }).catch(err => {
        // Handle error
        console.log(err);
        navigate("/login");
      });
  };
  const saveFilterDataHandler = (data) => {
    setResultCarData(data);
  };

  return (
    <Fragment>
      {!showResult && (
        <div className="search-car">
          <label htmlFor="searchText" class="form-label">
            Select Destination
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Pick a city"
            id="searchText"
            value={searchCarData.pickuplocation}
            name="pickuplocation"
            onChange={handelChange}
          />
          <label htmlFor="searchText" class="form-label">
            From:
          </label>
          <input
            type="date"
            class="form-control"
            value={searchCarData.datefrom}
            name="datefrom"
            onChange={handelChange}
          />
          <label htmlFor="searchText" class="form-label">
            To:
          </label>
          <input
            type="date"
            class="form-control"
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
