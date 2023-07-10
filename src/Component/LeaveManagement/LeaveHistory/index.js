import React, { useState, useEffect, useContext } from "react";
import { TokenContext } from "../../../TokenContext";
import Header from "../../header";
import UserSidebar from "../../dashboard/UserSidebar";

function LeaveHistory() {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const { token, employeeid, person } = useContext(TokenContext);

  useEffect(() => {
    let endpoint = `http://localhost:8080/leaverequests/leavehistory/${employeeid}?PrivateKey=${token}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setLeaveHistory(data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="row g-0">
        <div className="col-md-2">
          <UserSidebar />
        </div>
        <div className="col-md-10">
          <h1>Leave History Report</h1>
          {leaveHistory.length > 0 ? (
            <table className="table table-bordered mt-3" style={{ width: "98%" }}>
              <thead className="thead-dark">
                <tr>
                  <th>Leave Request ID</th>
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
  );
}

export default LeaveHistory;
