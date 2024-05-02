import React, { useState, useEffect } from 'react'
import axiosInstance from '../../baseURL'
import { useNavigate } from 'react-router-dom';


function UserEditProfile({url}) {
    const [profile, setProfile] = useState([]);
    const [vals, setvals] = useState({ firstname: '', lastname: '', age: '', dob: '', gender: '', phone: '', email: '', address: '', file: '' })

const navigate=useNavigate()

  useEffect(() => {
    axiosInstance.get('/Seller/profileView/' + localStorage.getItem("sellerId"),  {
      headers: {
          "Content-Type": "multipart/form-data",
      },
    })
    .then(res=>{
        console.log(res);
        setProfile(res.data)
        setvals(res.data)
    })
    .catch(err=>{
        console.log(err);
    })
  }, []);
    const Change = (a) => {
        if (a.target.name == "file") {
            setvals({ ...vals, file: a.target.files[0] });
        } else {
            setvals({ ...vals, [a.target.name]: a.target.value });
        }
    }
    const Submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("firstname", vals.firstname);
        formData.append("lastname", vals.lastname);
        formData.append("age", vals.age);
        formData.append("email", vals.email);
        formData.append("phone", vals.phone);
        formData.append("dob", vals.dob);
        formData.append("gender", vals.gender);
        formData.append("password", vals.password);
        formData.append("file", vals.file);
        formData.append("username", vals.username);
        formData.append("address", vals.address);

        axiosInstance.put('/Seller/updateSeller/' + localStorage.getItem("sellerId"),formData,  {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(res=>{
            console.log(res);
            alert(res.data)
            navigate("/sellerprofile/" + localStorage.getItem("sellerId"))
        })
        .catch(err=>{
            console.log(err);
            alert("unable to update plese enter valid information")
        })

    }
    useEffect(() => {
        if (localStorage.getItem("sellerId") !== null) {
          navigate("/sellereditprofile/"+localStorage.getItem("sellerId"));
        } else {
          navigate("/seller_login");
        }
      }, []);
    return (
        <div>
        <div style={{ marginTop: '90px', marginBottom: '90px' }}>
            <form onSubmit={Submit}>
                <div className="container" >
                    <div className="row">
                        <div className="" style={{ backgroundColor: 'secondary', borderRadius: '30px 15px 30px 15px', marginTop: '20px' ,boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                            <div style={{ marginTop: '25px', marginBottom: '20px' }}>
                                <div className='row g-3'>
                                    <div className='col-md-6'>
                                        <label>Firstname</label>
                                        <input type='text' className='form-control bg-light' onChange={Change} name='firstname' placeholder={profile.firstname} />
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Lastname</label>
                                        <input type='text' className='form-control bg-light' onChange={Change} name='lastname' placeholder={profile.lastname}/>
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Age</label>
                                        <input type='text' className='form-control bg-light' onChange={Change} name='age' placeholder={profile.age}/>
                                    </div>
                                    <div className='col-md-6'>
                                        <label>DOB</label>
                                        <input type='date' className='form-control bg-light' onChange={Change} name='dob' value={vals.dob} placeholder={profile.dob}/>
                                    </div>
                                    <div className='col-12'>
                                        <label>Gender</label>
                                        <select className='form-select bg-light' onChange={Change} name='gender' >
                                            <option>{profile.gender}</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>other</option>
                                        </select>
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Phoneno</label>
                                        <input type='number' className='form-control bg-light' onChange={Change} name='phone'  placeholder={profile.phone}/>
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Email</label>
                                        <input type='email' className='form-control bg-light' onChange={Change} name='email'  placeholder={profile.email}/>
                                    </div>
                                    <div className='col-12'>
                                        <label>Address</label>
                                        <textarea type='text' className='form-control bg-light' onChange={Change} name='address' placeholder={profile.address}/>
                                    </div>
                                </div>
                                <div className='col-md-6 mt-4 pt-3'>
                                    <button className='btn btn-outline-primary col-12' >Submit</button>
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

export default UserEditProfile
