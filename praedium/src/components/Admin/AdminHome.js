import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./AdminHome.css";
import axiosInstance from "../../baseURL";

function AdminHome() {
  const [users, setUsers] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosInstance.get("/admin/getAllBuyers").then((responce) => {
      setUsers(responce.data);
    });
    axiosInstance.get("/admin/sellerListing").then((responce) => {
      setSellers(responce.data);
    });
    axiosInstance.get("/Seller/propertyListing").then((responce) => {
      setProperties(responce.data);
    });
    axiosInstance.get("/message/orderListing").then((responce) => {
      setOrders(responce.data);
    });
  }, []);
  const navigate=useNavigate()
  useEffect(() => {
    if (localStorage.getItem("admin") !== null) {
      navigate("/adminDashboard");
    } else {
      navigate("/admin");
    }
  }, []);


  return (
    <div>
      <section className="home pt-5">
        <div className="row gx-5 m-5 admin_dashboard_main">
          <h1>Welcome Admin</h1>

          <div className="col-lg-6 mb-5 mt-5 mb-lg-0">
            <Link>
              <div className="revenue__box">
                <h5>Total Users</h5>
                <span>{users.length}</span>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 mb-5 mt-5 mb-lg-0">
            <Link>
              <div className="order__box">
                <h5>Total Sellers</h5>
                <span>{sellers.length}</span>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 mb-5 mt-5 mb-lg-0">
            <Link>
              <div className="products__box">
                <h5>Total Properties</h5>
                <span>{properties.length}</span>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 mb-5 mt-5 mb-lg-0">
            <Link>
              <div className="user__box">
                <h5>Total Orders</h5>
                <span>{orders.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminHome;
