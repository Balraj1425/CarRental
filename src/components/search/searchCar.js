import { useState } from "react";
import "./searchCar.css";

const SearchCar = () => {
  const [searchCarData, setSearchCar] = useState({
    pickuplocation: "",
    datefrom: "",
    dateto: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    // console.log("dateto", dateto);
    setSearchCar({
      ...searchCarData,
      [name]: value,
    });
  };
  const searchCarHandler = (e) => {
    e.preventDefault();
    console.log(searchCarData);
  };
  return (
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
  );
};
export default SearchCar;
