
import React, { useState, useEffect, useContext } from "react";
import { TokenContext } from "../../../TokenContext";
import Header from "../../header";
import UserSidebar from "../../dashboard/UserSidebar";

function Absenteeism() {
  const [absenteeismData, setAbsenteeismData] = useState([]);
  const { token, employeeid } = useContext(TokenContext);

  useEffect(() => {
    let endpoint = `http://localhost:8080/leaverequests/absenteeism/${employeeid}?PrivateKey=${token}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setAbsenteeismData(data);
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
            <h1>Leave Absenteeism Report</h1>
            {absenteeismData.length > 0 ? (
              <table className="table table-bordered mt-3" style={{ width: "98%" }}>
                <thead className="thead-dark">
                  <tr>
                    <th>Leave Request ID</th>
                    <th>Employee ID</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Leave Type</th>
                    <th>Reason</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {absenteeismData.map((leave) => (
                    <tr key={leave.leaverequestid}>
                      <td>{leave.leaverequestid}</td>
                      <td>{employeeid}</td>
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
              <p>No uninformed leaves.</p>
            )}
          </div>
        </div>
        </div>
  );
}

export default Absenteeism;
