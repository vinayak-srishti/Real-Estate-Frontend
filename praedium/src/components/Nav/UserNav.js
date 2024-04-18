import React from 'react'
import { Link } from 'react-router-dom'
function UserNav() {
    return (
        <div><nav class="navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm fixed-top">
            <div class="container">
                <a class="navbar-brand" >Navbar w/ text</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                        <li class="nav-item">
                            <Link to="/propertieslist" class="nav-link active" aria-current="page" >Properties</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/sellerlist" class="nav-link active" aria-current="page" >Sellers</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/usermessage" class="nav-link active" aria-current="page" > Message</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/usercart" class="nav-link active" aria-current="page" >Cart</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/orders" class="nav-link active" aria-current="page" >Orders</Link>
                        </li>
                    </ul>
                    <div class="dropdown " style={{ marginRight: '10px' }}>
                        <Link class="btn btn-outline-primary dropdown-toggle rounded-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img
                                src={""}
                                alt="img"
                                className="profileimg"
                            ></img>
                        </Link>
                        <ul class="dropdown-menu">
                            <li className=''><Link to="/userprofile" class="dropdown-item" href="User_login">Profile</Link></li>
                            <li><Link to="" class="dropdown-item" href="seller_login">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav></div>
    )
}

export default UserNav