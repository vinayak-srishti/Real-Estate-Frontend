import React, { useState, useEffect } from "react";
import axiosInstance from "../../baseURL";
import { useNavigate } from "react-router-dom";

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
            "/Seller/property/" + data.data[i].propertyId,
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

  const navigate=useNavigate()
  useEffect(() => {
    if (localStorage.getItem("sellerId") !== null) {
      navigate("/sellerorder");
    } else {
      navigate("/seller_login");
    }
  }, []);

  return (
    <div className="mt-5 pt-5">
    <div className=" container">
        {msg && msg.length > 0 ? (
          <div>
            <h3 className="text-center p-3">Orders</h3>
            <div class="row row-cols-1 row-cols-md-4 g-4">
              {msg.map((listing, index) => (
                <div class="col">
                  <div class="card" style={{height:'90vh'}}>
                    <img
                      src={`${url}${listing.pic}`}
                      class="card-img-top"
                      alt="..."
                      style={{ width: "100%", height: "170px" }}
                    ></img>
                    <div class="card-body">
                      <h6 class="card-title text-center">{listing.city}</h6>
                      <div class="card-text"><small>Landmark : {listing.landmark}</small></div>
                      <div class="card-text"><small>Area : {listing.area}</small></div>
                      <div class="card-text"><small>District : {listing.district}</small></div>
                      <div class="card-text"><small>Longitude : {listing.log}</small></div>
                      <div class="card-text"><small>Latitude : {listing.lat}</small></div>
                      <div class="card-text"><small>Amount : {listing.price}</small></div>
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
          <h6 className="text-center">No Orders Found</h6>
        )}
      </div>
    </div>
  );
}

export default UserOrders;
