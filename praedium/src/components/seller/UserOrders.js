import React, { useState, useEffect } from "react";
import axiosInstance from "../../baseURL";

function UserOrders({ url }) {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var temp = [];
      var data = await axiosInstance.get("/message/orderListing", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      for (var i in data.data) {
        if (data.data[i].sellerId == localStorage.getItem("sellerId")) {
          var property = await axiosInstance.get(
            "/Seller/property" + data.data[i].propertyId,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          var user = await axiosInstance.get(
            "/user/profileView/" + data.data[i].buyerId,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          temp.push(
            Object.assign(property.data, user.data, {
              sellerId: data.data[i].propertyId,
            })
          );
        }
      }

      setMsg(temp);
    }

    fetchData();
  }, []);

  return (
    <div className="mt-5 pt-5">
      <div className=" container" style={{ height: "150vh" }}>
        {msg && msg.length > 0 ? (
          <div>
            <h3 className="text-center p-3">Orders</h3>
            <div class="row row-cols-1 row-cols-md-4 g-4">
              {msg.map((listing, index) => (
                <div class="col">
                  <div class="card">
                    <img
                      src={`${url}${listing.pic}`}
                      class="card-img-top"
                      alt="..."
                      style={{ width: "100%", height: "170px" }}
                    ></img>
                    <div class="card-body">
                      <h5 class="card-title">City name : {listing.city}</h5>
                      <p class="card-text">Landmark : {listing.landmark}</p>
                      <p class="card-text">Area : {listing.area}</p>
                      <p class="card-text">District : {listing.district}</p>
                      <p class="card-text">Longitude : {listing.log}</p>
                      <p class="card-text">Latitude : {listing.lat}</p>
                      <p class="card-text">Amount : {listing.price}</p>
                    </div>
                    <div className="card text-center p-2">
                      <h6>Buyer Details</h6>
                      <div>Name : {listing.firstname}</div>
                      <div>phone : {listing.phone}</div>
                      <div>email : {listing.email}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          "no orders found"
        )}
      </div>
    </div>
  );
}

export default UserOrders;
