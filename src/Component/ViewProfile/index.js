import React, { useEffect, useState, useContext } from "react";
import "../../App.css";
import { TokenContext } from "../../TokenContext";
import Header from "../header";
import Sidebar from "../dashboard/Sidebar/index";
import UserSidebar from "../dashboard/UserSidebar/index";

function ViewProfile() {
  const [employeeData, setEmployeeData] = useState(null);
  const { person, token , employeeid } = useContext(TokenContext);

  useEffect(() => {
    let endpoint = null;

    if (person === "Employee") {
      endpoint = "http://localhost:8080/api/employees/"+ employeeid + "/?PrivateKey=" + token;
    } else if (person === "Manager") {
      endpoint = "http://localhost:8080/managers/"+ employeeid + "/?PrivateKey=" + token;
    }

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setEmployeeData(data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, [person]);

  return (
    <div>
    <Header />
    <div className="row">
      {person === "Manager" ? (
        <div className="col-md-3">
          <Sidebar />
        </div>
      ) : (
        <div className="col-md-3">
          <UserSidebar />
        </div>
      )}
    <div className="col-md-9 d-flex align-items-center justify-content-center">
      <div className="card p-4" style={{ width: "400px", margin: "20px", marginLeft: "-100px" }}>
        <div className="card-body">
          <h5 className="card-title">My Profile</h5>
          {employeeData && (
            <div>
              <div className="form-group">
                <label>Employee ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Employee ID"
                  value={employeeData.employeeid}
                  readOnly
                />
              </div>
              {person === "Manager" && (
            <div className="form-group">
              <label>Manager ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Manager ID"
                value={employeeData.managerid}
                readOnly
              />
            </div>
          )}
              <div className="form-group">
                <label>Employee Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Employee Name"
                  value={employeeData.name}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={employeeData.email}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  value={employeeData.phoneNumber}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Department</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Department"
                  value={employeeData.department}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  value={employeeData.password}
                  readOnly
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ViewProfile;
