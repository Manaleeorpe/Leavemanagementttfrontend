import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../TokenContext";

function LoginForm() {
  const navigate = useNavigate();
  const { token, person } = useContext(TokenContext);
  const { setToken, setPerson, setEmailid } = useContext(TokenContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    let endpoint = "http://localhost:8080/api/employees/login"; // Default endpoint
    setPerson("Employee");
    const loginData = { email, password };
    setEmailid(email);

    if (user === "Manager") {
      setPerson("Manager");
      endpoint = "http://localhost:8080/managers/login"; // Update endpoint for Manager
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const token = await response.text();
        setToken(token);
        setLoggedIn(true);

        if (user === "Employee") {
          navigate("/login/EmployeeDashboard");
        } else if (user === "Manager") {
          navigate("/login/ManagerDashboard");
        }
      } else {
        alert("Login failed.");
      }
    } catch (error) {
      document.write(`Error occurred: ${error}`);
    }
  };

  if (loggedIn) {
    return null; // Redirecting, so no need to render anything
  }

  return (
    <div className="container-fluid h-custom">
      <h1 className="text-center mt-4 mb-0">Welcome to Leave Management System</h1>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </div>

        <div className="col-lg-4 " style={{ marginTop: "100px", marginRight: "80px" }}>
          <div className="card mx-4 mx-md-5 shadow-5-strong">
            <div
              className="card-body py-5 px-md-5"
              style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}
            >
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="fw-bold mb-5">Sign in now</h2>
                  <div className="form-outline mb-4">
                    <select
                      className="form-select"
                      id="form3Example1"
                      value={user}
                      onChange={(e) => {
                        setUser(e.target.value);
                      }}
                    >
                      <option value="">Select User</option>
                      <option value="Employee">Employee</option>
                      <option value="Manager">Manager</option>
                    </select>
                    <label className="form-label" htmlFor="form3Example1">
                      User
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id="form3Example2"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label className="form-label" htmlFor="form3Example2">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control"
                      id="form3Example3"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Password
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-block mb-4"
                    onClick={handleLogin}
                  >
                    Login
                  </button>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a
                        href="http://localhost:3000/register"
                        className="text-blue-50 fw-bold"
                      >
                        Sign Up
                      </a>
                    </p>
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

export default LoginForm;
