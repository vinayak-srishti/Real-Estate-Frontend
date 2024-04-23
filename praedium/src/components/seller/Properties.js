import React, { useState, useEffect } from 'react';
import Land from "../Images/Land.jpg"
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Properties() {

  const [propertyListings, setPropertyListings] = useState([]);

  useEffect(() => {
    async function fetchPropertyListings() {
      try {
        const response = await fetch('http://localhost:8081/Seller/propertyListing');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        setPropertyListings(data); // Update state with fetched data
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
          <img src={Land} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{listing.city}</h5>
            <p class="card-text">{listing.features}</p>
          </div>
        </div>
      </div>
      ))}
      </div></div>
  )
}

export default Properties