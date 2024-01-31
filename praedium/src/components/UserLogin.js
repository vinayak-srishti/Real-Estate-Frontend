import React from 'react'
import { Link } from 'react-router-dom'
import '../components/UserStyle.css'


function UserLogin() {
    return (
        <div>
            <div className='backg'>
                <div class="mx-auto p-2 " style={{ width: '400px' }}>
                    <div className='box'>
                        <h4 style={{ textAlign: 'center', opacity: '0.6px' }}>Login page</h4>
                        <div className='inputs'>
                            <div className='username'>
                                <label>Username</label><br></br>
                                <input type='text' class="form-control"></input>
                            </div>
                            <div className='password'>
                                <label>password</label><br></br>
                                <input type='password' class="form-control"></input>
                            </div><br></br>
                            <div className='btn'>
                                <button class="btn btn-primary" >Submit</button>
                            </div>
                            <hr></hr>
                            <div className='register'>
                                <p>New User <Link>register?</Link></p>
                            </div>
                            <hr></hr>
                            <div>
                                <div class="container text-center">
                                    <div class="row row-cols-2">
                                        <Link><div class="col">Terms Condition</div></Link>
                                        <Link><div class="col">contact Us</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foot'></div>
        </div>
    )
}

export default UserLogin