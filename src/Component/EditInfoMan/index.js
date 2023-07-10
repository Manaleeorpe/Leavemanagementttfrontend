import React, { useState, useContext, useEffect } from "react";
import { TokenContext } from "../../TokenContext";
import Header from "../header";
import Sidebar from "../dashboard/Sidebar";

function EditInfoMan() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [employeeid, setEmployeeid] = useState("");
  const { token } = useContext(TokenContext);
  const [endpoint, setEndpoint] = useState("");
  const [user, setUser] = useState("");

  const handleRegister = async () => {
    const registerData = {
      employeeid,
      name,
      email,
      phoneNumber,
      department,
      password,
    };

    try {
      const response = await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        alert("Successfully Edited");
        // You can redirect the user to a login page or perform any other actions here
      } else {
        alert("Edit failed.");
      }
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  };

  useEffect(() => {
    if (user === "Employee") {
      setEndpoint(
        "http://localhost:8080/api/employees/" +
          employeeid +
          "?PrivateKey=" +
          token
      );
    } else if (user === "Manager") {
      setEndpoint(
        "http://localhost:8080/managers/" +
          employeeid +
          "?PrivateKey=" +
          token
      );
    }
  }, [user, employeeid, token]);

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-md-3">
          <Sidebar/>
        </div>
      <div className="col-md-9 d-flex align-items-center justify-content-center">
        <div className="card p-4" style={{ width: "400px", margin: "20px" ,marginLeft: "-100px" }}>
          <div className="card-body">
            <h5 className="card-title">Edit Profile</h5>
            <div className="form-group">
              <label>User</label>
              <input
                type="text"
                className="form-control"
                placeholder="Employee/Manager"
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Employee Id</label>
              <input
                type="text"
                className="form-control"
                placeholder="Employee id"
                value={employeeid}
                onChange={(e) => setEmployeeid(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                className="form-control"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={handleRegister}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    

  );
}

export default EditInfoMan;
