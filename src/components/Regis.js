import React, { useState } from "react";
import Reg from "./Images/Reg.jpg";
import axiosInstance from "../baseURL";
import { useNavigate } from "react-router-dom";

function Regis() {
  const [vals, setvals] = useState({
    Firstname: "",
    Lastname: "",
    Age: "",
    DOB: "",
    Gender: "",
    Phone: "",
    Email: "",
    Address: "",
    username: "",
    Password: "",
    file: "",
  });
  const [errors, setErrors] = useState({
    Firstname: "",
    Lastname: "",
    Age: "",
    DOB: "",
    Gender: "",
    Phone: "",
    Email: "",
    Address: "",
    username: "",
    Password: "",
    file: "",
  });
  let formValid = true;

  const Change = (a) => {
    if (a.target.name == "file") {
      setvals({ ...vals, file: a.target.files[0] });
    } else {
      setvals({ ...vals, [a.target.name]: a.target.value });
    }
  };

  const navigate = useNavigate();
  const Submit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!vals.Firstname.trim()) {
      formValid = false;
      errors.Firstname = "Firstname is required";
    }

    if (!vals.Lastname.trim()) {
      formValid = false;
      errors.Lastname = "Lastname is required";
    }
    if (!vals.Age.trim()) {
      formValid = false;
      errors.Age = "Age is required";
    }

    if (!vals.Email.trim()) {
      formValid = false;
      errors.Email = "Email is required";
    }

    if (!vals.Phone.trim()) {
      formValid = false;
      errors.Phone = "Contact number is required";
    } else if (vals.contact && vals.contact.length < 10) {
      errors.contact = "Enter valid number";
    }

    if (!vals.DOB.trim()) {
      formValid = false;
      errors.DOB = "DOB field is required";
    }

    if (!vals.Gender.trim()) {
      formValid = false;
      errors.Gender = "Gender field is required";
    }
    if (!vals.Address.trim()) {
      formValid = false;
      errors.Address = "Address is required";
    }
    if (!vals.username.trim()) {
      formValid = false;
      errors.username = "username is required";
    }
    if (!vals.Password.trim()) {
      formValid = false;
      errors.Password = "Password is required";
    } else if (vals.Password && vals.Password.length < 5) {
      errors.Password = "Password should be atleast 6 characters";
    }

    setErrors(errors);
    // registerCouncilar

    if (
      vals.Firstname &&
      vals.Lastname &&
      vals.Age &&
      vals.Email &&
      vals.Phone &&
      vals.DOB &&
      vals.Gender &&
      vals.Password &&
      vals.Address &&
      vals.username
    ) {
      formValid = true;
    }
    if (formValid) {
      // sendDataToServer();

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
      // console.log(" form ", formData);

      axiosInstance
        .post("/user/register", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("Response:", res);
          alert(res.data.message);
          setTimeout(() => {
            navigate("/User_login");
          }, 1500);
        })
        .catch((err) => {
          var msg =
            err && err.response && err.response.data
              ? err.response.data
              : "unexpected error";
          alert(msg);
        });
    } else {
      console.log("form is not valid", formValid);
      alert("Please Enter all fields", formValid);
      console.log("data entered", vals);
    }

    // console.log(vals);
    // axiosInstance
    //     .post("/user/register", vals, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     })
    //     .then((response) => {
    //         console.log(response, "y");
    //         // alert(response.data.msg);
    //         // navigate(`/creatorepisodes/${id}`)
    //     })
    //     .catch((error) => {
    //         console.error("Error submitting data: ", error);
    //         alert("can't registered")
    //     });
  };
  return (
    <div>
      <div style={{ marginTop: "130px", marginBottom: "90px" }}>
        <form onSubmit={Submit}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <picture>
                  <img src={Reg} className="img-fluid " alt="..." />
                </picture>
              </div>
              <div
                className="col-sm-6 col-md-6"
                style={{
                  backgroundColor: "whitesmoke",
                  borderRadius: "30px 15px 30px 15px",
                  marginTop: "20px",
                }}
              >
                <div style={{ marginTop: "25px", marginBottom: "20px" }}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label>Firstname</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        onChange={Change}
                        name="Firstname"
                        value={vals.Firstname}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Lastname</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        onChange={Change}
                        name="Lastname"
                        value={vals.Lastname}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Age</label>
                      <input
                        type="number"
                        className="form-control bg-light"
                        onChange={Change}
                        name="Age"
                        value={vals.Age}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>DOB</label>
                      <input
                        type="date"
                        className="form-control bg-light"
                        onChange={Change}
                        name="DOB"
                        value={vals.DOB}
                      />
                    </div>
                    <div className="col-12">
                      <label>Gender</label>
                      <select
                        className="form-select bg-light"
                        onChange={Change}
                        name="Gender"
                        value={vals.Gender}
                      >
                        <option>Choose</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label>Phoneno</label>
                      <input
                        type="number"
                        className="form-control bg-light"
                        onChange={Change}
                        name="Phone"
                        value={vals.Phone}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control bg-light"
                        onChange={Change}
                        name="Email"
                        value={vals.Email}
                      />
                    </div>
                    <div className="col-12">
                      <label>Address</label>
                      <textarea
                        type="text"
                        className="form-control bg-light"
                        onChange={Change}
                        name="Address"
                        value={vals.Address}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>username</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        onChange={Change}
                        name="username"
                        value={vals.username}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>password</label>
                      <input
                        type="password"
                        className="form-control bg-light"
                        onChange={Change}
                        name="Password"
                        value={vals.Password}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>profile</label>
                      <input
                        type="file"
                        className="form-control bg-light"
                        onChange={Change}
                        name="file"
                      />
                    </div>
                    <div className="col-md-6 mt-4 pt-3">
                      <button className="btn btn-outline-success col-12">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Regis;
