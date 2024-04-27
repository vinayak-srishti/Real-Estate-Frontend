import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axiosInstance from '../../baseURL'

function SellerNav({url}) {

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        axiosInstance.get('/Seller/profileView/' + localStorage.getItem("sellerId"),  {
          headers: {
              "Content-Type": "multipart/form-data",
          },
        })
        .then(res=>{
            console.log(res);
            setProfile(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
      }, []);

    return (
        <div><nav class="navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm fixed-top">
            <div class="container">
                <a class="navbar-brand" href="sellerhome">Navbar w/ text</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                        <li class="nav-item">
                            <Link to="/properties" class="nav-link active" aria-current="page" href="#">Properties</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/sellermessage" class="nav-link active" aria-current="page" href="#"> Message</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/userorder" class="nav-link active" aria-current="page" href="#">Orders</Link>
                        </li>
                    </ul>
                    <div class="dropdown " style={{ marginRight: '10px' }}>
                        <Link class="btn btn-outline-primary dropdown-toggle rounded-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img
                                src={`${url}${profile.profile}`}
                                alt="img"
                                className="profileimg"
                            ></img>
                        </Link>
                        <ul class="dropdown-menu">
                            <li className=''><Link to="/sellerprofile" class="dropdown-item" href="User_login">Profile</Link></li>
                            <li><Link to="/" class="dropdown-item" href="seller_login">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav></div>
    )
}

export default SellerNav