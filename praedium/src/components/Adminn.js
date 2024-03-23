import axios from 'axios'
import React, { useState } from 'react'

function Adminn() {
    const[vals,setvals]=useState({Username:'',Password:''})

    const Change=(data)=>{
        console.log(data)
        console.log(vals)
        setvals({...vals,[data.target.name]:data.target.value})
    }

    const Submit=(vals_add)=>{
        vals_add.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts",vals)
        .then(rest=>{
            console.log(rest)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            <form onSubmit={Submit}>
                <div className='continer' style={{ marginTop: '100px' }}>
                    <div className='row justify-content-center p-2'>
                        <div className='col-sm-6 col-md-6'>
                            <div className='col-12 shadow-lg p-3 mb-5 body-tertiary rounded '>
                                <h1>Admin</h1>
                                <div class="form-floating mb-3 col-12">
                                    <input type="text" class="form-control" placeholder="Username" name='Username' value={vals.Username} onChange={Change}/>
                                    <label>Username</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" placeholder="Password" name='Password' value={vals.Password} onChange={Change}/>
                                    <label>Password</label>
                                </div>
                                <div className='col-12 d-flex justify-content-between'>
                                    <button className='col-3 btn btn-primary btn-lg'>Login</button>
                                    <a href='#' className=' col-5 d-flex justify-content-end'>Forgot password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Adminn