import { Fragment } from "react";
import CarCard from "./carCard";
import "./searchResult.css"

const SearchResult = props => {

    const searchResults = [
        {
            "carName": "Hyundai Creta",
            "carImage": "/images/creta.jpg",
            "transmissionType": "Manual",
            "fuelType": "Petrol",
            "noOfSeats": 5,
            "price": "Rs 500/hr",
            "carId":1
        },
        {
            "carName": "Suzuki Brezza",
            "carImage": "/images/creta.jpg",
            "transmissionType": "Manual",
            "fuelType": "Petrol",
            "noOfSeats": 5,
            "price": "Rs 500/hr",
            "carId":2
        },
        {
            "carName": "Mahindra Thar",
            "carImage": "images/creta.jpg",
            "transmissionType": "Manual",
            "fuelType": "Petrol",
            "noOfSeats": 5,
            "price": "Rs 500/hr",
            "carId":3
        },
        {
            "carName": "Tata Safari",
            "carImage": "images/creta.jpg",
            "transmissionType": "Manual",
            "fuelType": "Petrol",
            "noOfSeats": 5,
            "price": "Rs 500/hr",
            "carId":4
        },
        {
            "carName": "Hyundai Creta",
            "carImage": "images/creta.jpg",
            "transmissionType": "Manual",
            "fuelType": "Petrol",
            "noOfSeats": 5,
            "price": "Rs 500/hr",
            "carId":5
        }
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <label htmlFor="searchText" class="form-label">Seats:</label>
                        <div className="" style={{display:"inherit"}}>
                            <div className="col-lg-4 seat-div">5</div>
                            <div className="col-lg-4 seat-div">6</div>
                            <div className="col-lg-4 seat-div">7</div>
                        </div>
                        <label htmlFor="searchText" class="form-label">Car Types:</label>
                        <div className="" style={{display:"inherit"}}>
                            <div className="col-lg-4 seat-div">SUV</div>
                            <div className="col-lg-4 seat-div">Hatchback</div>
                            <div className="col-lg-4 seat-div">Sedan</div>
                        </div>
                        <label htmlFor="searchText" class="form-label">Transmission:</label>
                        <div className="" style={{display:"inherit"}}>
                            <div className="col-lg-6 seat-div">Manual</div>
                            <div className="col-lg-6 seat-div">Automatic</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    {searchResults.map((item) => (
                        <CarCard 
                            key={item.carId}
                            carName={item.carName}
                            carImage={item.carImage}
                            transmissionType={item.transmissionType}
                            fuelType={item.fuelType}
                            price={item.price}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default SearchResult