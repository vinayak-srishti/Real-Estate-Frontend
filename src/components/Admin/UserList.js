import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axiosInstance from "../../baseURL";
import { useNavigate } from "react-router-dom";

function UserList({url}) {
  const [usersListings, setUserslistings] = useState([]);

  useEffect(() => {
    async function fetchusersListings() {
      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await axiosInstance.get(
          "admin/getAllBuyers",
          config
        );
        console.log(response);
        setUserslistings(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchusersListings(); // Call the async function
  }, []);

  const navigate=useNavigate()
  useEffect(() => {
    if (localStorage.getItem("admin") !== null) {
      navigate("/userslist");
    } else {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="container mt-5 pt-5" style={{height:'100vh'}}>
      {" "}
      {usersListings && usersListings.length > 0 ?
      <div>
                <h4>Buyer List</h4>

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
          </tr>
        </thead>
        <tbody>
        {
          usersListings.map((items,index)=>(
          <tr>
          <td><img style={{width:'50px',height:'50px',borderRadius:'50px'}} src={`${url}${items.profile}`}></img></td>
          <td>{items.firstname}{items.lastname}</td>
          <td>{items.age}</td>
          <td>{items.phone}</td>
          <td>{items.gender}</td>
          <td>{items.email}</td>
          <td>{items.address}</td>
        </tr>

          ))
        }
        </tbody>
      </Table></div>
      :<h6 className="text-center">No users available</h6>  
      }
      
    </div>

  )
}

export default UserList