import React, { useState, useEffect, useContext } from "react";
import { TokenContext } from "../../../TokenContext";
import Header from "../../header";
import Sidebar from "../../dashboard/Sidebar";

function LeaveHistoryMan() {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [Employee, setEmployee] = useState([]);
  const [name, setName] = useState("");
  const { token, employeeid, person } = useContext(TokenContext);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const fetchLeaveHistory = (selectedEmployeeId) => {
    fetch(`http://localhost:8080/leaverequests/leavehistory/${selectedEmployeeId}?PrivateKey=${token}`)
      .then((response) => response.json())
      .then((data) => setLeaveHistory((prevLeaveHistory) => [...prevLeaveHistory, ...data]))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    setLeaveHistory([]); // Reset leave history when employees change
    Employee.forEach((employee) => {
      fetchLeaveHistory(employee.employeeid);
    });
  }, [Employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/employees/name?name=` + name)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) => console.error("Error:", error));
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
      <h1>Leave History Report</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee Name:</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "98%" ,  marginBottom: "10px"}}
            value={name}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Fetch Leave History</button>
      </form>
      {leaveHistory.length > 0 ? (
        <table className="table table-bordered mt-3" style={{ width: "98%" }}>
          <thead className="thead-dark">
            <tr>
              <th>Leave Request ID</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Leave Type</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveHistory.map((leave) => (
              <tr key={leave.leaverequestid}>
                <td>{leave.leaverequestid}</td>
                <td>{leave.employee.employeeid}</td>
                <td>{leave.employee.name}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.leavetype}</td>
                <td>{leave.reason}</td>
                <td>{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No leave history available.</p>
      )}
    </div>
    </div>
    </div>
    </div>
  );
}

export default LeaveHistoryMan;
