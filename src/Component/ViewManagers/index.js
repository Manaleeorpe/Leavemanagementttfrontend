import React, { useEffect, useState, useContext } from "react";
import "../../App.css";
import { TokenContext } from "../../TokenContext";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";

function ViewManagers() {
  const [employeeData, setEmployeeData] = useState([]);
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = () => {
    let endpoint = "http://localhost:8080/managers?PrivateKey=" + token;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setEmployeeData(data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  };

  const handleEdit = () => {
    navigate("/login/ManagerDashboard/editinfo");
  };

  const handleDelete = (employeeid) => {
    let endpoint =
      "http://localhost:8080/api/employees/" +
      employeeid +
      "?PrivateKey=" +
      token;

    fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Employee has been deleted");
          fetchEmployeeData(); // Fetch updated employee data
        } else {
          alert("Employee has not been deleted");
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="row g-0">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
        <div className="table-container">
      <h1>Managers Data</h1>

      {employeeData.length > 0 ? (
        <table className="table table-bordered" style={{ width: "98%" }}>
          <thead className="thead-dark">
            <tr>
              <th>Employee ID</th>
              <th>Manager ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Department</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((Employee) => (
              <tr key={Employee.employeeid}>
                <td>{Employee.employeeid}</td>
                <td>{Employee.managerid}</td>
                <td>{Employee.name}</td>
                <td>{Employee.email}</td>
                <td>{Employee.phoneNumber}</td>
                <td>{Employee.department}</td>
                <td>
                  <button
                    className="btn btn-success mr-2"
                    onClick={() => handleEdit()}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(Employee.employeeid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Managers.</p>
      )}
    </div>
    </div>
    </div>
    </div>
  );
}

export default ViewManagers;
