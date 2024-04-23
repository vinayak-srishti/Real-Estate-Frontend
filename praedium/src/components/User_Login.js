import React, { useState } from 'react'
import '../components/User_login.css'
import Img from './Images/lock.png'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../baseURL'

function User_Login() {
    const [vals,setvals]=useState({username:'',password:''})

    const Change=(data)=>{
        console.log(vals)
        console.log(data)
        setvals({...vals,[data.target.name]:data.target.value})
    }
    const navigate=useNavigate()
    const Submit=(vals_add)=>{
        vals_add.preventDefault()
        axiosInstance.post('/user/buyerlogin',vals)
        .then(res=>{
            console.log(res);
            alert(res.data.message)
            localStorage.setItem("userId", res.data.userId)
            navigate("/userhome")
        })
        .catch(err=>{
            console.log(err);
            alert(err.response ? err.response.data : "unexpected error")
        })
    }
    return (
        <div>
            <form onSubmit={Submit}>
                <div className='continer' style={{ marginLeft: '20px', marginTop: '150px' }}>
                    <div className='row justify-content-center' >
                        <div className=' col-sm-6 col-md-5'>
                            <div className='row g-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded-5' style={{ marginTop: '20px' }} >
                                <h1 className='tex'>User Sign in</h1>
                                <div className='col-md-12'>

                                    <input className='form-control' placeholder='username' type='text' onChange={Change} name='username' values={vals.username}></input>
                                </div>
                                <div className='col-md-12'>

                                    <input className='form-control' placeholder='password' type='password' onChange={Change} name='password' values={vals.password}></input>
                                </div>
                                <div className='col-md-`12 d-flex justify-content-end'>
                                    <Link to='/userforgot'>Forgot password</Link>
                                </div>
                                <div className='col-md-12 text-center g-4'>
                                    <button className=' btn btn-primary col-6'><img src={Img} style={{ width: '20px', height: '19px', marginBottom: '5px' }} /> Login </button>
                                </div>
                                <div className='col-md-12'>
                                    <hr></hr>
                                </div>
                                <div className='col-md-12 text-center ' >
                                    <label>New user</label> <a href='reg' >register?</a>
                                </div>
                                <div className='col-md-12'>
                                    <hr></hr>
                                </div>
                                <div className='col-12'>
                                    <div className='row justify-content-evenly'>
                                        <div className='col-auto me-auto'>
                                            <a href='/terms'>Termscondition</a>
                                        </div>
            
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default User_Login