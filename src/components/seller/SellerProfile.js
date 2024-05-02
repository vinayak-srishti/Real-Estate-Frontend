import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../baseURL";

function UserProfile({ url }) {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("sellerId");
    navigate("/seller_login");
  };

  useEffect(() => {
    axiosInstance
      .get("/Seller/profileView/" + localStorage.getItem("sellerId"), {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  useEffect(() => {
    if (localStorage.getItem("sellerId") !== null) {
      navigate("/UserProfile");
    } else {
      navigate("/seller_login");
    }
  }, []);
  return (
    <div className="p-5 mt-5">
      <div className="container mt-5 pt-5">
        <div
          className="row"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            backgroundColor: "",
            padding: "4% ",
            boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <div className="col-12 text-center" style={{ position: "relative" }}>
            <img
              src={`${url}${profile.profile}`}
              alt="Profile"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.95) 0px 5px 15px",
                marginTop: "120px",
                maxWidth: "200px",
                position: "absolute",
                left: "400px ",
                top: "-250px",
                borderRadius: "500px",
                height: "200px",
              }}
            />
          </div>
          <div className="col-5 ms-5 ps-5 mt-5 pt-5">
            <p> Firstname: {profile.firstname} </p>
            <p> Lastname: {profile.lastname}</p>
            <p> Age: {profile.age} </p>
            <p> DOB: {profile.dob} </p>
            <p> Gender: {profile.gender} </p>
          </div>
          <div className="col-5 ms-5 mt-5 ps-5 pt-5">
            <p> Phone: {profile.phone} </p>
            <p> Email: {profile.email} </p>
            <p> Address: {profile.address} </p>
            <p> Username: {profile.username} </p>
            <div className="mt-3">
              <button className="btn btn-primary">
                <Link
                  className="text-light text-decoration-none"
                  to={`/sellereditprofile/${localStorage.getItem("sellerId")}`}
                >
                  Edit
                </Link>
              </button>
              <button className="ms-5 btn btn-primary" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
