import React, { useState, useEffect } from 'react';
import Land from "../Images/Land.jpg"
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axiosInstance from '../../baseURL'


function Properties({url}) {

  const [propertyListings, setPropertyListings] = useState([]);

  useEffect(() => {
    async function fetchPropertyListings() {
      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        };
        const response = await axiosInstance.get('Seller/propertyListing', config);
        console.log(response.data)
        setPropertyListings(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchPropertyListings(); // Call the async function
  }, []);

  return (
    <div className=' container mt-5 pt-5'>
      <div className='text-center m-5'><button className='btn btn-secondary'><Link className='text-light text-decoration-none' to="/addproperty"><AiFillPlusCircle/> Add A Property</Link> </button></div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
      {propertyListings.map((listing, index) => (
        <div class="col">
        <div class="card">
<<<<<<< HEAD
          <img src={`${url}${listing.pic}`} class="card-img-top" alt="..."></img>
=======
          <img src={`${url}/${listing.pic}`} class="card-img-top" alt="..."></img>q
>>>>>>> 8a77b8f55524bd0d0b1a75c599d672d8d290778e
          <div class="card-body">
            <h5 class="card-title">{listing.city}</h5>
            <p class="card-text">{listing.landmark }</p>
            <p class="card-text">{listing.area }</p>
            <p class="card-text">{listing.district }</p>
            <p class="card-text">{listing.log }</p>
            <p class="card-text">{listing.lat }</p>
            <p class="card-text">{listing.price}</p>
          </div>
        </div>
      </div>
      ))}
      </div></div>
  )
}

export default Properties