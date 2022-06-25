import { Fragment } from "react";
import "./searchCar.css";

const SearchCar = props =>{
    return (
        <div className="search-car">
            <label htmlFor="searchText" class="form-label">Select Destination</label>
            <input type="text" class="form-control" placeholder="Pick a city" id="searchText"/>
            <label htmlFor="searchText" class="form-label">From:</label>
            <input type="date" class="form-control"/>
            <label htmlFor="searchText" class="form-label">To:</label>
            <input type="date" class="form-control"/>
            <button className="">Find Cars</button>
        </div>
    )
}
export default SearchCar