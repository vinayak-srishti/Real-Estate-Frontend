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
    <div className=' container mt-5 pt-5' style={{height:'150vh'}}>
      <div className='text-center m-5'><button className='btn btn-secondary'><Link className='text-light text-decoration-none' to="/addproperty"><AiFillPlusCircle/> Add A Property</Link> </button></div>
      {propertyListings && propertyListings.length > 0 ?
      <div>
<h4 className='pb-3'>my properties</h4>
      <div class="row row-cols-1 row-cols-md-4 g-4">
      {propertyListings.map((listing, index) => (
        <div class="col">
        <div class="card">
          <img src={`${url}${listing.pic}`} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">City name : {listing.city}</h5>
            <p class="card-text">Landmark : {listing.landmark }</p>
            <p class="card-text">Area : {listing.area }</p>
            <p class="card-text">District : {listing.district }</p>
            <p class="card-text">Longitude : {listing.log }</p>
            <p class="card-text">Latitude : {listing.lat }</p>
            <p class="card-text">Amount : {listing.price}</p>
          </div>
        </div>
      </div>
      ))}
      </div></div>:' no property available'}</div>
  )
}

export default Properties