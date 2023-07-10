import React, { useState, useEffect, useContext } from "react";
import { TokenContext } from "../../../TokenContext";
import Header from "../../header";
import UserSidebar from "../../dashboard/UserSidebar";
  function LeaveBalance() {
    const [leaveBalanceData, setLeaveBalanceData] = useState([]);
    const { token, employeeid } = useContext(TokenContext);
  
    useEffect(() => {
      let endpoint = `http://localhost:8080/leavebalances/${employeeid}?PrivateKey=${token}`

      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          setLeaveBalanceData(data);
        })
        .catch((error) => {
          console.error("Error fetching employee data:", error);
        });
    }, []);

  return (
    <div>
      < Header />
      <div className="row g-0">
        <div className="col-md-2">
          <UserSidebar />
        </div>
        <div className="col-md-10">
      <h1>Leave Balance Report</h1>
      {leaveBalanceData.length > 0 ? (
        <table className="table table-bordered mt-3" style={{ width: "98%" }}>
          <thead className="thead-dark">
            <tr>
              <th>Leave Balance ID</th>
              <th>Leave Type</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {leaveBalanceData.map((balance) => (
              <tr key={balance.leavebalanceid}>
                <td>{balance.leavebalanceid}</td>
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
  );
}

export default LeaveBalance;
