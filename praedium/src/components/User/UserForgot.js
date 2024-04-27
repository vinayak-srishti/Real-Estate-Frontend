import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../baseURL'


function UserForgot() {
const [userfg,setUserfg]=useState({
  email:"",
  password:""
})
const [errors,setErrors]=useState({
  email:"",
  password:""
})
const navigate=useNavigate()

const changefn = (e) => {

  const { name, value } = e.target

  setUserfg(prevuserfg => ({
    ...prevuserfg, [name]: value
  }))

  setErrors(prevErrors => ({
    ...prevErrors, [name]: ""
  }))
}

const formValidation = (fieldName, value) => {
  if (!value.trim()) {
    return `${fieldName} is required`;
  }
  // if (fieldName === "Password" && value.length < 8) {
  //   return "Password must be at least 8 characters long";
  // }
  // return '';
}


const submitfn = (e)=>{
e.preventDefault();
console.log('pp')

let errors = {}

  errors.email = formValidation("Email", userfg.email);
  errors.password = formValidation("Password", userfg.password)

  setErrors(errors);


  if (!errors.email && !errors.password) {
    const formData = new FormData();
    formData.append("email", userfg.email);
    formData.append("newPassword", userfg.password);

    axiosInstance.post('/user/resetPassword',formData,  {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    .then(res=>{
        console.log(res);
        alert(res.data)
        navigate("/user_login")
    })
    .catch(err=>{
        console.log(err);
        alert("unable to reset please enter valid information")
    })
  }
}

  return (
   
    < div id='FgPassword'>

    <h1> Buyer Reset Password</h1>
    
    <div className='user-loginform'>
      <form onSubmit={submitfn}>
        <div className='user-login-input'>
            <input type='email' placeholder='Mail id' name='email' onChange={changefn}/>
            {errors.email && <div className='text-danger'> {errors.email} </div>}
        </div>
        <div className='user-login-input'>
            <input type='text' placeholder='Password' name='password' onChange={changefn}/>
            {errors.password && <div className='text-danger'> {errors.password} </div>}
        </div>
        
        <div className='user-fgpassbtn'>
            <button type='submit'>RESET</button>
        </div>
        </form>
    </div> 
    
    <h2>OR</h2>
    <h3>YOU HAVE'NT ACCOUNT ? <Link to="/"><span>CREATE ONE</span></Link></h3>
    </div>

  )
}

export default UserForgot