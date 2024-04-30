import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../baseURL";

function SellerNav({ url }) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/Seller/profileView/" + localStorage.getItem("sellerId"), {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("sellerId");
    navigate("/seller_login");
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm fixed-top"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <div class="container">
          <a class="navbar-brand" href="sellerhome">
            Navbar w/ text
          </a>
          <button
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
                  to="/properties"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Properties
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/sellermessage"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  {" "}
                  Message
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/sellerorder"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Orders
                </Link>
              </li>
            </ul>
            <div class="dropdown " style={{ marginRight: "10px" }}>
              <Link
                class="dropdown-toggle rounded-5"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={`${url}${profile.profile}`}
                  alt="img"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    boxShadow: "rgba(0, 0, 0, 0.65) 0px 5px 15px",
                  }}
                ></img>
              </Link>
              <ul class="dropdown-menu">
                <li className="">
                  <Link
                    to={`/sellerprofile/${localStorage.getItem("userId")}`}
                    class="dropdown-item"
                    href=""
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button class="dropdown-item" href="" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SellerNav;
