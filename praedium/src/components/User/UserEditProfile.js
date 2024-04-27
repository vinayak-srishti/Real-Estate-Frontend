import React, { useState, useEffect } from 'react'
import axiosInstance from '../../baseURL'


function UserEditProfile({url}) {
    const [profile, setProfile] = useState([]);

  useEffect(() => {
    axiosInstance.get('/user/profileView/' + localStorage.getItem("userId"),  {
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
    const [vals, setvals] = useState({ Firstname: '', Lastname: '', Age: '', DOB: '', Gender: '', Phone: '', Email: '', Address: '', file: '' })
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
        formData.append("firstname", vals.Firstname);
        formData.append("lastname", vals.Lastname);
        formData.append("age", vals.Age);
        formData.append("email", vals.Email);
        formData.append("phone", vals.Phone);
        formData.append("dob", vals.DOB);
        formData.append("gender", vals.Gender);
        formData.append("password", vals.Password);
        formData.append("file", vals.file);
        formData.append("username", vals.username);
        formData.append("address", vals.Address);

        axiosInstance.put('/user/updateBuyer/' + localStorage.getItem("userId"),formData,  {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(res=>{
            console.log(res);
            alert(res.data)
            // navigate("/properties")
        })
        .catch(err=>{
            console.log(err);
            alert("unable to update plese enter valid information")
        })

    }
    return (
        <div>
            <div style={{ marginTop: '130px', marginBottom: '90px' }}>
                <form onSubmit={Submit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6" style={{ backgroundColor: 'whitesmoke', borderRadius: '30px 15px 30px 15px', marginTop: '20px' }}>
                                <div style={{ marginTop: '25px', marginBottom: '20px' }}>
                                    <div className='row g-3'>
                                        <div className='col-md-6'>
                                            <label>Firstname</label>
                                            <input type='text' className='form-control bg-light' onChange={Change} name='Firstname' value={vals.Firstname} placeholder={profile.firstname} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Lastname</label>
                                            <input type='text' className='form-control bg-light' onChange={Change} name='Lastname' value={vals.Lastname} placeholder={profile.lastname}/>
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Age</label>
                                            <input type='number' className='form-control bg-light' onChange={Change} name='Age' value={vals.Age} placeholder={profile.age}/>
                                        </div>
                                        <div className='col-md-6'>
                                            <label>DOB</label>
                                            <input type='date' className='form-control bg-light' onChange={Change} name='DOB' value={vals.DOB} placeholder={profile.dob}/>
                                        </div>
                                        <div className='col-12'>
                                            <label>Gender</label>
                                            <select className='form-select bg-light' onChange={Change} name='Gender' value={vals.Gender} >
                                                <option>{profile.gender}</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>other</option>
                                            </select>
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Phoneno</label>
                                            <input type='number' className='form-control bg-light' onChange={Change} name='Phone' value={vals.Phone} placeholder={profile.phone}/>
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Email</label>
                                            <input type='email' className='form-control bg-light' onChange={Change} name='Email' value={vals.Email} placeholder={profile.email}/>
                                        </div>
                                        <div className='col-12'>
                                            <label>Address</label>
                                            <textarea type='text' className='form-control bg-light' onChange={Change} name='Address' value={vals.Address} placeholder={profile.address}/>
                                        </div>
                                        <div className='col-md-6'>
                                            <label>preview</label>
                                            <div>
                                                <img src={`${url}${profile.profile}`}/>
                                            </div>
                                            <input type='file'  className='form-control bg-light' onChange={Change} name='file' />
                                        </div>
                                    </div>
                                    <div className='col-md-6 mt-4 pt-3'>
                                        <button className='btn btn-outline-success col-12' >Submit</button>
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
