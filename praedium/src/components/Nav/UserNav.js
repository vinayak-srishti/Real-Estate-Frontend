import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../baseURL";

function UserNav({ url }) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/user/profileView/" + localStorage.getItem("userId"), {
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
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userId");
    navigate("/user_login");
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm fixed-top"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <div class="container">
          <a class="navbar-brand" href="/userhome">
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
                  to="/propertieslist"
                  class="nav-link active"
                  aria-current="page"
                >
                  Properties
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/sellerlist"
                  class="nav-link active"
                  aria-current="page"
                >
                  Sellers
                </Link>
              </li>
              {/* <li class="nav-item">
                            <Link to="/usermessage" class="nav-link active" aria-current="page" > Message</Link>
                        </li> */}
              <li class="nav-item">
                <Link to="/orders" class="nav-link active" aria-current="page">
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
                  className="profileimg"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    boxShadow: "rgba(0, 0, 0, 0.55) 0px 5px 15px",
                  }}
                ></img>
              </Link>
              <ul class="dropdown-menu">
                <li className="">
                  <Link to={`/userprofile`} class="dropdown-item" href="">
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    href="seller_login"
                    onClick={logout}
                  >
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

export default UserNav;
