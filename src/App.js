import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import LoginForm from './Component/Login/index';
import Register from './Component/Registration/index'
import EmployeeDashboard from './Component/dashboard/EmployeeDashboard/index';
import ManagerDashboard from './Component/dashboard/ManagerDashboard/index';
import Logout from "./Component/Logout/index";
import TokenContextProvider from "./TokenContext";
import LeaveRequests from "./Component/LeaveManagement/leaverequests";
import LeaveHistory from "./Component/LeaveManagement/LeaveHistory";
import Absenteeism from "./Component/LeaveManagement/LeaveAbsenteeism";
import Leavebalance from "./Component/LeaveManagement/LeaveBalance";
import EditInfo from "./Component/EditInfo";
import Manageleaves from "./Component/ManageLeaves";
import ViewProfile from "./Component/ViewProfile";
import ViewEmployees from "./Component/ViewEmployees";
import ViewManagers from "./Component/ViewManagers";
import LeaveBalanceMan from "./Component/LeaveManagementManager/LeaveBalanceMan";
import LeaveHistoryMan from "./Component/LeaveManagementManager/LeaveHistoryMan";
import LeaveAbsenteeismMan from "./Component/LeaveManagementManager/LeaveAbsenteeismMan";
import EditInfoMan from "./Component/EditInfoMan";

function App() {
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <TokenContextProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginForm setToken={setToken} setLoggedIn={setLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login/EmployeeDashboard" element={<EmployeeDashboard />} />
            <Route path="/login/ManagerDashboard" element={<ManagerDashboard />} />
            <Route path="/login/EmployeeDashboard/leaverequests" element={<LeaveRequests />} />
            <Route path="/login/EmployeeDashboard/leavehistory" element={<LeaveHistory />} />
            <Route path="/login/EmployeeDashboard/absenteeism" element={<Absenteeism />} />
            <Route path="/login/EmployeeDashboard/leavebalance" element={<Leavebalance />} />
            <Route path="/login/EmployeeDashboard/editinfo" element={<EditInfo />} />
            <Route path="/login/EmployeeDashboard/view" element={<ViewProfile />} />
            <Route path="/login/EmployeeDashboard/logout" element={<Logout />} />
            

            <Route path="/login/ManagerDashboard/leaverequests" element={<LeaveRequests />} />
            <Route path="/login/ManagerDashboard/leavehistory" element={<LeaveHistoryMan />} />
            <Route path="/login/ManagerDashboard/absenteeism" element={<LeaveAbsenteeismMan />} />
            <Route path="/login/ManagerDashboard/leavebalance" element={<LeaveBalanceMan />} />
            <Route path="/login/ManagerDashboard/editinfo" element={<EditInfoMan />} />
            <Route path="/login/ManagerDashboard/manageleaves" element={<Manageleaves />} />
            <Route path="/login/ManagerDashboard/view" element={<ViewProfile />} />
            <Route path="/login/ManagerDashboard/viewEmployees" element={<ViewEmployees />} />
            <Route path="/login/ManagerDashboard/viewManagers" element={<ViewManagers />} />
            <Route path="/login/ManagerDashboard/logout" element={<Logout />} />
          </Routes>
        </Router>
        </TokenContextProvider>

    </div>
  );
}

export default App;
