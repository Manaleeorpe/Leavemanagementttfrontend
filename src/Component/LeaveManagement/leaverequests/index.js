import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Moment from 'moment';
import { TokenContext } from "../../../TokenContext";
import Header from "../../header";
import Sidebar from "../../dashboard/Sidebar";
import UserSidebar from "../../dashboard/UserSidebar";

function LeaveRequests() {
  const navigate = useNavigate();
  const { token, person, employeeid } = useContext(TokenContext);

  const [leaverequests, setLeaverequests] = useState({
    employeeid: "",
    endDate: "",
    leavetype: "",
    reason: "",
    startDate: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLeaverequests({
      ...leaverequests,
      [name]: value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/leaverequests/"+ employeeid +"?PrivateKey="+ token, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leaverequests),
    })
      .then((response) => {
        if (response.ok) {
          alert("Leave Requests made successfully");
          if(person === "Employee"){
            navigate("/login/EmployeeDashboard");
          } else if(person === "Manager"){
            navigate("/login/ManagerDashboard");
          }
        } else {
          alert("Error making a leaverequest");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error making a leaverequest");
      });
  };
  

  return (
    <div>
      <Header />
      <div className="row">
        {person === "Manager" ? (
          <div className="col-md-3">
            <Sidebar/>
          </div>
        ) : (
          <div className="col-md-3">
            <UserSidebar/>
          </div>
        )}
        
        <div className="col-md-9 d-flex align-items-center justify-content-center">
          <div className="card p-4" style={{ width: "400px", margin: "20px" , marginLeft: "-100px" }}>
            <div className="card-body">
              <h5 className="card-title">Leave Request</h5>


              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  placeholder="Start Date"
                  value={Moment(leaverequests.startDate).format('YYYY-MM-DD')}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  placeholder="End Date"
                  value={Moment(leaverequests.endDate).format('YYYY-MM-DD')}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Leave Type</label>
                <input
                  type="text"
                  className="form-control"
                  name="leavetype"
                  placeholder="Leave Type"
                  value={leaverequests.leavetype}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Reason</label>
                <input
                  type="text"
                  className="form-control"
                  name="reason"
                  placeholder="Reason"
                  value={leaverequests.reason}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary" onClick={handleAdd}>
                Submit
              </button>
            </div>
          </div>
        </div>
        
      </div>
      


    </div>
  );
}

export default LeaveRequests;
