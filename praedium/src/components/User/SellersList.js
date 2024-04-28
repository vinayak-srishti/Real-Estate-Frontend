import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axiosInstance from "../../baseURL";

function SellersList({url}) {
  const [sellersListings, setSellerslistings] = useState([]);

  useEffect(() => {
    async function fetchsellerListings() {
      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await axiosInstance.get(
          "admin/sellerListing",
          config
        );
        console.log(response.data);
        setSellerslistings(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchsellerListings(); // Call the async function
  }, []);

  return (
    <div className="container mt-5 pt-5" style={{height:'100vh'}}>
      {" "}
      {sellersListings && sellersListings.length > 0 ?
        <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>profile</th>
            <th>Name</th>
            <th>age</th>
            <th>phone</th>
            <th>gender</th>
            <th>email</th>
            <th>address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          sellersListings.map((items,index)=>(
          <tr>
          <td><img style={{width:'50px',height:'50px',borderRadius:'50px'}} src={`${url}${items.profile}`}></img></td>
          <td>{items.firstname}{items.lastname}</td>
          <td>{items.age}</td>
          <td>{items.phone}</td>
          <td>{items.gender}</td>
          <td>{items.email}</td>
          <td>{items.address}</td>
          <td><button className="btn btn-primary">Message</button></td>
        </tr>

          ))
        }
        </tbody>
      </Table>
      : "No sellers" 
      }
      
    </div>
  );
}

export default SellersList;
