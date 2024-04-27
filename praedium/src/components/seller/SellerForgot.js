import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./SellerForget.css"
import axiosInstance from '../../baseURL'


function SellerForgot() {

  const [sellerfp, setSellerfp] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  })

  const changefn = (e) => {

    const { name, value } = e.target

    setSellerfp(prevsellerfp => ({
      ...prevsellerfp, [name]: value
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
    return '';
  }
  const navigate=useNavigate()


  const submitfn = (e) => {
    e.preventDefault();

    let errors = {}

    errors.email = formValidation("Email", sellerfp.email);
    errors.password = formValidation("Password", sellerfp.password)

    setErrors(errors)

    if (!errors.email && !errors.password) {
      const formData = new FormData();
      formData.append("email", sellerfp.email);
      formData.append("password", sellerfp.password);
  
      axiosInstance.put('/Seller/resetSeller-password',formData,  {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      })
      .then(res=>{
          console.log(res);
          alert(res.data)
          navigate("/seller_login")
      })
      .catch(err=>{
          console.log(err);
          alert("unable to update plese enter valid information")
      })
    }
  }

  return (

    < div id='FgPassword'>

      <h1>Seller Reset Password</h1>

      <div className='user-loginform'>
        <form onSubmit={submitfn}>
          <div className='user-login-input'>
            <input type='email' name='email' onChange={changefn} placeholder='Mail id' />
            {errors.email && <div className='text-danger'> {errors.email} </div>}
          </div>
          <div className='user-login-input'>
            <input type='password' name='password' onChange={changefn} placeholder='Password' />
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


export default SellerForgot