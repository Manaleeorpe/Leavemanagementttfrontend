import React, { useState, useEffect, useContext } from "react";
import Header from "../header";
import { TokenContext } from "../../TokenContext";
import Sidebar from "../dashboard/Sidebar";

function ManageLeaves() {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const { token } = useContext(TokenContext);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    fetchLeaveHistory();
  }, []);

  const fetchLeaveHistory = () => {
    fetch(`http://localhost:8080/leaverequests?PrivateKey=${token}`)
      .then((response) => response.json())
      .then((data) => setLeaveHistory(data))
      .catch((error) => console.error("Error:", error));
  };

  const handleStatusUpdate = (leaverequestid, status) => {
    let endpoint = `http://localhost:8080/managers/leaverequests/${leaverequestid}/${status}?PrivateKey=${token}`;

    fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatusMessage(`Leave request ${leaverequestid} status is set to: ${status}`);
          fetchLeaveHistory(); // Fetch updated employee data
        } else {
          alert("Leave Request did not update");
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
          <h1>Manage Leaves</h1>
            {leaveHistory.length > 0 ? (
              <table className="table table-bordered mt-3" style={{ width: "98%" }}>
                <thead className="thead-dark">
                  <tr>
                    <th>Leave Request ID</th>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Leave Type</th>
                    <th>Reason</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveHistory.map((leave) => {
                    if (leave.status === "pending") {
                      return (
                        <tr key={leave.leaverequestid}>
                          <td>{leave.leaverequestid}</td>
                          <td>{leave.employee.employeeid}</td>
                          <td>{leave.employee.name}</td>
                          <td>{leave.startDate}</td>
                          <td>{leave.endDate}</td>
                          <td>{leave.leavetype}</td>
                          <td>{leave.reason}</td>
                          <td>
                            <button
                              className="btn btn-success mr-2"
                              onClick={() =>
                                handleStatusUpdate(leave.leaverequestid, "approved")
                              }
                            >
                              Approve
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                handleStatusUpdate(leave.leaverequestid, "rejected")
                              }
                            >
                              Reject
                            </button>
                          </td>
                        </tr>
                      );
                    } else {
                      return null; // Skip rendering if status is not "pending"
                    }
                  })}
                </tbody>
              </table>
            ) : (
              <p>No leaverequests available.</p>
            )}
            {statusMessage && <p>{statusMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageLeaves;
