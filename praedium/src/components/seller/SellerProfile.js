import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../baseURL'


function UserProfile({url}) {

  const [profile, setProfile] = useState([]);
  const navigate=useNavigate()

  const logout =() => {
    localStorage.removeItem('sellerId');
    navigate("/sellerhome")
  }

  useEffect(() => {
    axiosInstance.get('/Seller/profileView/' + localStorage.getItem("sellerId"),  {
      headers: {
          "Content-Type": "multipart/form-data",
      },
    })
    .then(res=>{
        console.log(res);
        setProfile(res.data)
    })
    .catch(err=>{
        console.log(err);
    })
  }, []);

  return (
    <div className=''><div className='container mt-5 pt-5'>
    <div className='row' style={{ backgroundColor: 'whitesmoke', padding: '4% ', boxshadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }}>
      <div className='col-6'>
        <img src={`${url}${profile.profile}`}></img>
      </div>
      <div className='col-6'>
        <p> Firstname :{profile.firstname} </p>
        <p> lastname :{profile.lastname}</p>
        <p> Age :{profile.age} </p>
        <p> DOB :{profile.dob} </p>
        <p> Gender :{profile.gender} </p>
        <p> Phone :{profile.phone} </p>
        <p> Email :{profile.email} </p>
        <p> Address :{profile.address} </p>
        <p> Username :{profile.username} </p>
        <div><button className='btn btn-primary'><Link className='text-light text-decoration-none' to="/sellereditprofile">Edit</Link></button><button className='ms-5 btn btn-primary'>
          <di className='text-light text-decoration-none' to="" onClick={logout}>Logout</di></button></div>
      </div>
    </div>
  </div></div>
  )
}

export default UserProfile