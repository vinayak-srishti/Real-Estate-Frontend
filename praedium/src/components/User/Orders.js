import React, { useState, useEffect } from "react";
import axiosInstance from "../../baseURL";

function Orders({url}) {

  const [msg, setMsg] = useState([]);


  useEffect(() => {
    async function fetchData() {
      var temp = [];
      var data = await axiosInstance
      .get("/message/orderListing", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      for (var i in data.data) {
        if (data.data[i].buyerId == localStorage.getItem('userId')){
          var property = await axiosInstance
            .get("/Seller/property"+data.data[i].propertyId, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            temp.push(property.data)
        }
      }

      setMsg(temp)
    } 
    
    fetchData()
      
  }, []);

  return (
    <div className=' container mt-5 pt-5' style={{height:'100vh'}}>    
    {msg && msg.length > 0 ?
    <div>
      <h5 className="text-center pb-2">My orders</h5>

      <div class="row row-cols-1 row-cols-md-4 g-4">
      {msg.map((listing, index) => (
        <div class="col">
        <div class="card">
          <img src={`${url}${listing.pic}`} class="card-img-top" alt="..."                 style={{width:'100%',height:'180px'}}
          ></img>
          <div class="card-body">
            <h5 class="card-title">City name : {listing.city}</h5>
            <p class="card-text">Landmark : {listing.landmark }</p>
            <p class="card-text">Area : {listing.area }</p>
            <p class="card-text">District : {listing.district }</p>
            <p class="card-text">Longitude : {listing.log }</p>
            <p class="card-text">Latitude : {listing.lat }</p>
            <p class="card-text">Amount : {listing.price}/-</p>
          </div>
        </div>
      </div>
      ))}
      </div></div>:' No orders found'}</div>
  )
}

export default Orders