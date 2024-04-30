import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axiosInstance from "../../baseURL";

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
          "Seller/propertyListing",
          config
        );
        console.log(response);
        setPropertylistings(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchusersListings(); // Call the async function
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
                <th>profile</th>
                <th>sellerName</th>
                <th>price</th>
                <th>district</th>
                <th>city</th>
                <th>features</th>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        "No properties available"
      )}
    </div>
  );
}

export default PropertyList;
