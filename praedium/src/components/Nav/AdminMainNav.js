import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../baseURL";

function AdminMainNav() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm fixed-top"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <div class="container">
        <a class="navbar-brand" href="/adminDashboard" style={{fontFamily:'italic'}}>
        <h4>RealEstate</h4>          </a>          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li class="nav-item">
                <Link
                  to="/userslist"
                  class="nav-link active"
                  aria-current="page"
                >
                  Buyers List
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/sellerslist"
                  class="nav-link active"
                  aria-current="page"
                >
                  Sellers List
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/adminproperty"
                  class="nav-link active"
                  aria-current="page"
                >
                  Property List
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/adminorderlist"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Orders List
                </Link>
              </li>
            </ul>
            <div class="dropdown " style={{ marginRight: "10px" }}>
              <button class="dropdown-item" href="" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminMainNav;
