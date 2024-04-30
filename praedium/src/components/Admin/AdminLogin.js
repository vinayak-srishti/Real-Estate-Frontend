import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let mail = "admin@gmail.com";
  let pass = "admin123";

  let navigate = useNavigate();

  const doLogin = (e) => {
    e.preventDefault();

    const values = { email: email, password: password };
    console.log(values);
    if (mail == email && pass == password) {
      alert("Loggedin Successfully");
      localStorage.setItem("admin", 1);
      navigate("/adminDashboard");
    } else {
      alert("Username or Password is incorrect");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={doLogin}>
          <div className="continer" style={{ marginTop: "100px" }}>
            <div className="row justify-content-center p-2">
              <div className="col-sm-6 col-md-6">
                <div className="col-12 shadow-lg p-3 mb-5 body-tertiary rounded ">
                  <h1>Admin</h1>
                  <div class="form-floating mb-3 col-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      name="Username"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label>Email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      name="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label>Password</label>
                  </div>
                  <div className="col-12 d-flex justify-content-between">
                    <button className="col-3 btn btn-primary btn-lg">
                      Login
                    </button>
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

export default AdminLogin;
