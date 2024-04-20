import React, { useState } from 'react'

function SellerAddProperty() {
    const [vals, setvals] = useState({ lat: '', log: '', district: '', city: '', type: '', landmark: '', features: '', price: '', area: '', file: '' })

    const Change = (a) => {
        if (a.target.name == "file") {
            setvals({ ...vals, file: a.target.files[0] });
        } else {
            setvals({ ...vals, [a.target.name]: a.target.value });
        }
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
                                <label>area</label>
                                <textarea type='text' className='form-control bg-light' onChange={Change} name='price' value={vals.price} />
                            </div>
                            <div className='col-md-6'>
                                <label>price</label>
                                <input type='text' className='form-control bg-light' onChange={Change} name='area' value={vals.area} />
                            </div>
                            <div className='col-md-6'>
                                <label>Image</label>
                                <input type='file' className='form-control bg-light' onChange={Change} name='file' />
                            </div>
                            <div className='col-md-6 mt-4 pt-3'>
                                <button className='btn btn-outline-success col-12' >Submit</button>
                            </div></form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerAddProperty