import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axiosInstance from "../../baseURL";
import { useNavigate } from "react-router-dom";

function PropertyList({ url }) {
  const [propertyListings, setPropertylistings] = useState([]);

  useEffect(() => {
    async function fetchusersListings() {
      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await axiosInstance.get(
          "Seller/viewAllProperties",
          config
        );
        console.log(response);
        for( var i in response.data){
          if(response.data[i].status == "pending"){
            response.data[i].color='green'
          }
          else{
            response.data[i].color='red'
          }
        }
        setPropertylistings(response.data); // Update state with fetched data

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchusersListings(); // Call the async function
  }, []);

  const navigate=useNavigate()
  useEffect(() => {
    if (localStorage.getItem("admin") !== null) {
      navigate("/adminproperty");
    } else {
      navigate("/admin");
    }
  }, []);
  return (
    <div className="container mt-5 pt-5" style={{ height: "100vh" }}>
      {" "}
      {propertyListings && propertyListings.length > 0 ? (
        <div>
          <h4>Property List</h4>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Property</th>
                <th>SellerName</th>
                <th>Price</th>
                <th>District</th>
                <th>City</th>
                <th>Features</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {propertyListings.map((items, index) => (
                <tr>
                  <td>
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                      src={`${url}${items.pic}`}
                    ></img>
                  </td>
                  <td>{items.sellerName}</td>
                  <td>{items.price}</td>
                  <td>{items.district}</td>
                  <td>{items.city}</td>
                  <td>{items.features}</td>
                  <td ><button className="btn text-light" style={{backgroundColor:items.color}}>{items.status}</button></td>

                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <h6 className="text-center">No properties available</h6>
      )}
    </div>
  );
}

export default PropertyList;
