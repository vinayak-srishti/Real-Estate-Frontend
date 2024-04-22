import React from 'react'
import { Link } from 'react-router-dom'

function UserProfile() {
  return (
    <div className='mt-5 pt-5'><div className='container mt-5 pt-5'>
    <div className='row' style={{ backgroundColor: 'whitesmoke', padding: '4% ', boxshadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }}>
      <div className='col-6'>
        <img src=""></img>
      </div>
      <div className='col-6'>
        <p> Firstname :L </p>
        <p> lastname :L </p>
        <p> Age :L </p>
        <p> DOB :L </p>
        <p> Gender :L </p>
        <p> Phone :L </p>
        <p> Email :L </p>
        <p> Address :L </p>
        <p> Username :L </p>
        <div><button className='btn btn-primary'><Link className='text-light text-decoration-none' to="/usereditprofile">Edit</Link></button><button className='ms-5 btn btn-primary'>
          <Link className='text-light text-decoration-none' to="">Logout</Link></button></div>
      </div>
    </div>
  </div></div>
  )
}

export default UserProfile