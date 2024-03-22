import React from 'react'
import '../components/Navstyle.css'

function Nav() {
    return (
        <div>
            <nav class="navbar fixed-top body-tertiary bg-dark text-light">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="#">Fixed top</a>
                    <div class='col-3'>
                        <input class='form-control' type='search' placeholder='Search'></input>
                    </div>
                    <div class='col-2'>
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Login
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg body-tertiary fixed-top box2 bg-dark  " style={{ borderRadius: '10px' }}>
                <div class="container-fluid ">
                    <a class="navbar-brand text-light" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" data-bs-theme="dark">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav" >
                            <a class="nav-link active text-light" style={{ paddingLeft: '55px' }} aria-current="page" href="#">Agricultural</a>
                            <a class="nav-link active text-light" style={{ paddingLeft: '55px' }} href="#">Commercial Land</a>
                            <a class="nav-link active text-light" style={{ paddingLeft: '55px' }} href="#">Farm</a>
                            <a class="nav-link active text-light" style={{ paddingLeft: '55px' }} href="#">Industrial</a>
                            <a class="nav-link active text-light" style={{ paddingLeft: '55px' }} href="#">Plot</a>
                            <a class="nav-link active text-light" style={{ paddingLeft: '55px' }} href="#">Residential area</a>
                            <a class="nav-link active text-light" style={{ paddingLeft: '55px' }} href="#">Development property</a>
                            <a class="nav-link active text-light" style={{ paddingLeft: '55px' }} href="#">Investment land</a>
                            <a class="nav-link active text-light" style={{ paddingLeft: '55px' }} href="#">Investment</a>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav