import React, { useState, useEffect } from "react";
import Land from "../Images/Land.jpg";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../baseURL";

function PropertiesList({ url }) {
  const [propertyListings, setPropertyListings] = useState([]);

  useEffect(() => {
    async function fetchPropertyListings() {
      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await axiosInstance.get(
          "Seller/propertyListing",
          config
        );
        console.log(response.data);
        setPropertyListings(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchPropertyListings(); // Call the async function
  }, []);

  const navigate=useNavigate()
  const handleMessage=()=>{
    navigate("/payment")

  }
  const HandleOrder=()=>{

  }
  return (
    <div className=" container mt-5 pt-5">
    {propertyListings && propertyListings.length > 0 ?
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {propertyListings.map((listing, index) => (
          <div class="col">
            <div class="card">
              <img
                src={`${url}${listing.pic}`}
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">City name : {listing.city}</h5>
                <p class="card-text">Landmark : {listing.landmark}</p>
                <p class="card-text">Area : {listing.area}</p>
                <p class="card-text">District : {listing.district}</p>
                <p class="card-text">Longitude : {listing.log}</p>
                <p class="card-text">Latitude : {listing.lat}</p>
                <p class="card-text">Amount : {listing.price}</p>
                <button onClick={()=>HandleOrder()} className="btn btn-primary">Order</button>
                <button onClick={()=>handleMessage()} className="btn btn-primary ms-5">Message</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      : 'No properties found'
    }
      
    </div>
  );
}

export default PropertiesList;
