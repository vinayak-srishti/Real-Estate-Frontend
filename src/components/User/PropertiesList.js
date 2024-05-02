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
  const handleMessage=(id,sid)=>{
    navigate(`/buyerPropertyBasedMessage/${id+'_'+sid}`)
  }
  const HandleOrder=(id,sid)=>{
    navigate(`/payment/${id+'_'+sid}`)
  }
  return (
<div className=" container mt-5 pt-5">    {propertyListings && propertyListings.length > 0 ?
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {propertyListings.map((listing, index) => (
          <div class="col-4">
            
            <div class="card" style={{height:'80vh'}}>
              <img
                src={`${url}${listing.pic}`}
                class="card-img-top"
                alt="..."
                style={{width:'100%',height:'180px'}}
              ></img>
              <div class="card-body">
                <h5 class="card-title">City name : {listing.city}</h5>
                <p class="card-text">Landmark : {listing.landmark}</p>
                <p class="card-text">Area : {listing.area}</p>
                <p class="card-text">District : {listing.district}</p>
                <p class="card-text">Amount : {listing.price}/-</p>
                <button className="btn btn-primary"><Link to={`/propetyDetail/${listing.propertyId}` } className="text-light">View More</Link></button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
       : <h6 className="text-center">No Properties Found</h6>
     }
      
    </div>
  );
}

export default PropertiesList;
