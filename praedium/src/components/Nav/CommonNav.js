import React from 'react'
import { Link } from 'react-router-dom'
function CommonNav() {
    return (
        <div><nav class="navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Navbar w/ text</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                        <li class="nav-item">
                            <Link to="/about" class="nav-link active" aria-current="page" href="#">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/saftey" class="nav-link active" aria-current="page" href="#">Saftey Guide</Link>
                        </li>

                        <li class="nav-item">
                            <Link  to="/terms" class="nav-link active" aria-current="page" href="#">Terms & condition</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/feedback" class="nav-link active" aria-current="page" href="#">Feedback</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link active" aria-current="page" href="#">Contact Us</Link>
                        </li>


                    </ul>
                    <div class="dropdown " style={{ marginRight: '10px' }}>
                        <button class="btn btn-outline-primary dropdown-toggle rounded-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Login
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="User_login">Buyer login</a></li>
                            <li><a class="dropdown-item" href="seller_login">Seller login</a></li>
                        </ul>
                    </div>
                    <div class="dropdown" style={{ marginRight: '50px' }}>
                        <button class="btn btn-outline-primary dropdown-toggle rounded-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Register
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="reg">Buyer Register</a></li>
                            <li><a class="dropdown-item" href="seller_reg">Seller Register</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav></div>
    )
}

export default CommonNav