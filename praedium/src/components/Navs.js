import React from 'react'

function Navs() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar w/ text</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Agricultural</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Commercial Land</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Farm</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Industrial</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Residential area</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Development property</a>
                            </li>
                        </ul>
                        <div class="dropdown " style={{ marginRight: '10px' }}>
                            <button class="btn btn-outline-primary dropdown-toggle rounded-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Login
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="User_login">Buyer login</a></li>
                                <li><a class="dropdown-item" href="seller_login">Seller login</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown" style={{ marginRight: '50px' }}>
                            <button class="btn btn-outline-primary dropdown-toggle rounded-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Register
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="reg">Buyer Register</a></li>
                                <li><a class="dropdown-item" href="seller_reg">Seller Register</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navs