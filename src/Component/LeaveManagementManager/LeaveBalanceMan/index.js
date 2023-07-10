import React, { useState, useEffect, useContext } from "react";
import { TokenContext } from "../../../TokenContext";
import Header from "../../header";
import Sidebar from "../../dashboard/Sidebar";

function LeaveBalanceMan() {
  const [leaveBalanceData, setLeaveBalanceData] = useState([]);
  const [name, setName] = useState("");
  const { token, employeeid } = useContext(TokenContext);
  const [Employee, setEmployee] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const fetchLeaveBalance = (selectedEmployeeId) => {
    fetch(`http://localhost:8080/leavebalances/${selectedEmployeeId}?PrivateKey=${token}`)
      .then((response) => response.json())
      .then((data) => setLeaveBalanceData((prevAbsenteeismData) => [...prevAbsenteeismData, ...data]))
      .catch((error) => console.error("Error:", error));
  };
  useEffect(() => {
    setLeaveBalanceData([]); // Reset leave history when employees change
    Employee.forEach((employee) => {
      fetchLeaveBalance(employee.employeeid);
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
      < Header />
      <div className="row g-0">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
        <div className="table-container">
      <h1>Leave Balance Report</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            style={{ width: "98%" ,  marginBottom: "10px"}}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Fetch Leave Balance</button>
      </form>
      {leaveBalanceData.length > 0 ? (
        <table className="table table-bordered mt-3" style={{ width: "98%" }}>
          <thead className="thead-dark">
            <tr>
              <th>Leave Balance ID</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Leave Type</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {leaveBalanceData.map((balance) => (
              <tr key={balance.leavebalanceid}>
                <td>{balance.leavebalanceid}</td>
                <td>{balance.employee.employeeid}</td>
                <td>{balance.employee.name}</td>
                <td>{balance.leavetype}</td>
                <td>{balance.balances}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No leave balance data available.</p>
      )}
    </div>
    </div>
    </div>
    </div>
  );
}

export default LeaveBalanceMan;
