import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axiosInstance from "../../baseURL";
import { useNavigate } from "react-router-dom";
function OrderList({ url }) {
  const [orderListings, setOrderlistings] = useState([]);

  useEffect(() => {
    async function fetchOrderListings() {
      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await axiosInstance.get("/message/orderListing", config);
        console.log(response);
        setOrderlistings(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchOrderListings(); // Call the async function
  }, []);

  const navigate=useNavigate()
  useEffect(() => {
    if (localStorage.getItem("admin") !== null) {
      navigate("/adminorderlist");
    } else {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="container mt-5 pt-5" style={{ height: "100vh" }}>
      {" "}
      {orderListings && orderListings.length > 0 ? (
        <div><h5>Orders list</h5>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Property</th>
              <th>BuyerName</th>
              <th>SellerName</th>
              <th>Property location</th>
              <th>Property Price</th>
            </tr>
          </thead>
          <tbody>
            {orderListings.map((items, index) => (
              <tr>
                <td>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50px",
                    }}
                    src={`${url}${items.propertyImage}`}
                  ></img>
                </td>
                <td>
                  {items.buyerName}
                </td>
                <td>{items.sellerName}</td>
                <td>{items.address}</td>
                <td>{items.price}</td>
               
              </tr>
            ))}
          </tbody>
        </Table></div>
      ) : (
      <h6 className="text-center">No Order Available</h6>
      )}
    </div>
  );
}

export default OrderList;
