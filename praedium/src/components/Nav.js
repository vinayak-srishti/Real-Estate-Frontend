import React from 'react'
import '../components/Navstyle.css'

function Nav() {
    return (
        <div>
            <nav class="navbar fixed-top body-tertiary bg-dark text-light">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="#">Fixed top</a>
                    <div class='col-3'>
                        <input class='form-control' type='search'></input>
                    </div>
                    <div class='col-2'>
                        <button class='btn btn-primary'> Login</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav