import React, { useState, useContext } from "react";
import { TokenContext } from "../../TokenContext";
import Header from "../header";
import UserSidebar from "../dashboard/UserSidebar";

function EditInfo() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const { token , employeeid } = useContext(TokenContext);

    const handleRegister = async () => {

        const registerData = {employeeid, name, email, phoneNumber, department, password };
    
        try {
          const response = await fetch("http://localhost:8080/api/employees/" + employeeid + "?PrivateKey=" + token, {
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
          document.write(`Error occurred: ${error}`);
        }
  };

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-md-3">
          <UserSidebar/>
        </div>
    <div className="col-md-9 d-flex align-items-center justify-content-center">
      <div className="card p-4" style={{ width: "400px", margin: "20px" ,marginLeft: "-100px"}}>
        <div className="card-body">
          <h5 className="card-title">Edit My Profile</h5>
            <div className="form-group">
              <label>Employee Id</label>
              <input
                  type="text"
                  className="form-control"
                  placeholder="Employee ID"
                  value={employeeid}
                  readOnly
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
            <select
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

export default EditInfo;
