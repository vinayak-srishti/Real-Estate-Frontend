import axios from 'axios'
import Reg from '../components/Images/Reg.jpg'
import React, { useState } from 'react'
import axiosInstance from '../baseURL'

function Seller_reg() {
    const [vals, setvals] = useState({ Firstname: '', Lastname: '', Age: '', DOB: '', Gender: '', Phone: '', Email: '', Address: '', Username: '', Password: '' })

    const Change = (a) => {
        if (a.target.name == "file") {
            setvals({ ...vals, file: a.target.files[0] });
        } else {
            setvals({ ...vals, [a.target.name]: a.target.value });
        }
    }
    const Submit = (e) => {
        // vals_add.preventDefault()
        // axios.post("https://jsonplaceholder.typicode.com/posts",vals)
        // .then(rest=>{
        //     console.log(rest)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
        e.preventDefault()
        console.log(vals);
        axiosInstance
            .post("/Seller/sellerRegister", vals, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response, "y");
                // alert(response.data.msg);
                // navigate(`/creatorepisodes/${id}`)
            })
            .catch((error) => {
                console.error("Error submitting data: ", error);
                alert("can't registered")
            });
    }
    return (
        <div>
            <div style={{ marginTop: '130px', marginBottom: '90px' }}>
                <form onSubmit={Submit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <picture>
                                    <img src={Reg} className="img-fluid " alt="..." />
                                </picture>
                            </div>
                            <div className="col-sm-6 col-md-6" style={{ backgroundColor: 'whitesmoke', borderRadius: '30px 15px 30px 15px', marginTop: '20px' }}>
                                <div style={{ marginTop: '25px', marginBottom: '20px' }}>
                                    <div className='row g-3'>
                                        <div className='col-md-6'>
                                            <label>Firstname</label>
                                            <input type='text' className='form-control bg-light' onChange={Change} name='Firstname' value={vals.Firstname} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Lastname</label>
                                            <input type='text' className='form-control bg-light' onChange={Change} name='Lastname' value={vals.Lastname} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Age</label>
                                            <input type='number' className='form-control bg-light' onChange={Change} name='Age' value={vals.Age} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>DOB</label>
                                            <input type='date' className='form-control bg-light' onChange={Change} name='DOB' value={vals.DOB} />
                                        </div>
                                        <div className='col-12'>
                                            <label>Gender</label>
                                            <select className='form-select bg-light' onChange={Change} name='Gender' value={vals.Gender}>
                                                <option>Choose</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>other</option>
                                            </select>
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Phoneno</label>
                                            <input type='number' className='form-control bg-light' onChange={Change} name='Phone' value={vals.Phone} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Email</label>
                                            <input type='email' className='form-control bg-light' onChange={Change} name='Email' value={vals.Email} />
                                        </div>
                                        <div className='col-12'>
                                            <label>Address</label>
                                            <textarea type='text' className='form-control bg-light' onChange={Change} name='Address' value={vals.Address} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Username</label>
                                            <input type='text' className='form-control bg-light' onChange={Change} name='Username' value={vals.Username} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>password</label>
                                            <input type='password' className='form-control bg-light' onChange={Change} name='Password' value={vals.Password} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>profile</label>
                                            <input type='file' className='form-control bg-light' onChange={Change} name='file' />
                                        </div>
                                        <div className='col-md-6 mt-4 pt-3'>
                                            <button className='btn btn-outline-success col-12' >Submit</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>-
                </form>
            </div>
        </div>
    )
}

export default Seller_reg