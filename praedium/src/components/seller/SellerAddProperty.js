import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import axiosInstance from '../../baseURL'



function SellerAddProperty() {
    const [vals, setvals] = useState({ lat: '', log: '', district: '', city: '', type: '', landmark: '', features: '', price: '', area: '', file: '' })
    const navigate=useNavigate()

    const Change = (a) => {
        if (a.target.name == "file") {
            setvals({ ...vals, file: a.target.files[0] });
        } else {
            setvals({ ...vals, [a.target.name]: a.target.value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("lat", vals.lat);
        formData.append("log", vals.log);
        formData.append("district", vals.district);
        formData.append("city", vals.city);
        formData.append("type", vals.type);
        formData.append("landmark", vals.landmark);
        formData.append("features", vals.features);
        formData.append("price", vals.price);
        formData.append("area", vals.area);
        formData.append("file", vals.file);
        formData.append("sid", localStorage.getItem('sellerId'));

        axiosInstance.post('/Seller/AddProperty',formData,  {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(res=>{
            console.log(res);
            alert(res.data.message)
            navigate("/properties")
        })
        .catch(err=>{
            console.log(err);
            alert("unable to add plese enter valid information")
        })
    }

    return (
        <div className='container mt-5 pt-5'>
            <div className="" style={{ backgroundColor: 'whitesmoke', padding: '4% ' ,boxshadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}}>
                <div >
                    <div className='row g-3'>
                        <form >
                            <div className='col-md-6'>
                                <label>Latitude</label>
                                <input type='number' className='form-control bg-light' onChange={Change} name='lat' value={vals.lat} />
                            </div>
                            <div className='col-md-6'>
                                <label>longitude</label>
                                <input type='number' className='form-control bg-light' onChange={Change} name='log' value={vals.log} />
                            </div>
                            <div className='col-12'>
                                <label>district</label>
                                <input type='text' className='form-control bg-light' onChange={Change} name='district' value={vals.district} />
                            </div>
                            <div className='col-12'>
                                <label>city</label>
                                <input type='text' className='form-control bg-light' onChange={Change} name='city' value={vals.city} />
                            </div>
                            <div className='col-12'>
                                <label>type</label>
                                <input type='text' className='form-control bg-light' onChange={Change} name='type' value={vals.type} />

                            </div>
                            <div className='col-md-6'>
                                <label>landmark</label>
                                <input type='text' className='form-control bg-light' onChange={Change} name='landmark' value={vals.landmark} />
                            </div>
                            <div className='col-md-6'>
                                <label>features</label>
                                <input type='text' className='form-control bg-light' onChange={Change} name='features' value={vals.features} />
                            </div>
                            <div className='col-12'>
                                <label>price</label>
                                <input type='number' className='form-control bg-light' onChange={Change} name='price' value={vals.price} />
                            </div>
                            <div className='col-md-6'>
                                <label>area</label>
                                <input type='text' className='form-control bg-light' onChange={Change} name='area' value={vals.area} />
                            </div>
                            <div className='col-md-6'>
                                <label>Image</label>
                                <input type='file' className='form-control bg-light' onChange={Change} name='file' />
                            </div>
                            <div className='col-md-6 mt-4 pt-3'>
                                <button className='btn btn-outline-success col-12' onClick={handleSubmit}>Submit</button>
                            </div></form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerAddProperty