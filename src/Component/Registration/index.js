import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [managerid, setManagerId] = useState("");

  const handleRegister = async () => {
    let endpoint = "http://localhost:8080/api/employees"; // Default endpoint

    const registerData = { name, email, phoneNumber, department, password, managerid };

    if (user === "Manager") {
      endpoint = "http://localhost:8080/managers"; // Update endpoint for Manager
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        alert("Registration successful.");
        // You can redirect the user to a login page or perform any other actions here
        navigate("/login");
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      document.write(`Error occurred: ${error}`);
    }
  };

  return (
    <div className="container-fluid h-custom">
      <h1 className="text-center mt-4 mb-0">Welcome to Leave Management System</h1>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample image"
          />
        </div>
        <div className="col-md-6">
      <div
        className="card mx-4 mx-md-5 shadow-5-strong"
        style={{
          maxWidth: "900px",
          marginTop: '110px',
          backgroundColor: 'rgba(255, 255, 255, 1)'
        }}
      >
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="form3Example1"
                      value={user}
                      onChange={(e) => {
                        setUser(e.target.value);
                      }}
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      User
                    </label>
                  </div>

                  {user === "Manager" && (
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="form3Example2"
                        value={managerid}
                        onChange={(e) => setManagerId(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example2">
                        Manager ID
                      </label>
                    </div>
                  )}

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="form3Example3"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Name
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id="form3Example4"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-outline mb-4">
                    <select
                      className="form-select"
                      id="form3Example5"
                      value={department}
                      onChange={(e) => {
                        setDepartment(e.target.value);
                      }}
                    >
                      <option value="">Select Department</option>
                      <option value="HR">HR</option>
                      <option value="Finance">Finance</option>
                      <option value="IT">IT</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                    </select>
                    <label className="form-label" htmlFor="form3Example5">
                      Department
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="form3Example6"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                    <label className="form-label" htmlFor="form3Example6">
                      Phone Number
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control"
                      id="form3Example7"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label className="form-label" htmlFor="form3Example7">
                      Password
                    </label>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-primary btn-block mb-4"
                onClick={handleRegister}
              >
                Register
              </button>

              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
  </div>
  );
}

export default Register;
