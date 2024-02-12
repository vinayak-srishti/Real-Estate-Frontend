import React from 'react'
import '../components/User_login.css'
import { Link } from 'react-router-dom'

function User_Login() {
    return (
        <div>
            <div className='img'>
                <div className='back'>
                    <div class="mx-auto p-2" style={{ width: '400px' }}>
                        <div className='box'>
                            <div className='group'>
                                <label>UserName</label>
                                <input type='text' class="form-control" style={{ marginBottom: '6px', width: '250px' }}></input>
                                <label>Password</label>
                                <input type='password' class="form-control" style={{ width: '250px' }}></input>
                                <button style={{ marginLeft: '50px', marginTop: '20px', width: '150px' }} class="btn btn-primary">sumbit</button>
                                <hr></hr>
                                <p style={{ textAlign: 'center' }}>New User <Link> register?</Link></p>
                                <hr></hr>
                                <div class="container text-center">
                                    <div class="row">
                                        <div class="col">
                                            <Link class="text-decoration-none"> Termscondition</Link>
                                        </div>
                                        <div class="col">
                                            <Link class="text-decoration-none"> ContactUs</Link>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User_Login