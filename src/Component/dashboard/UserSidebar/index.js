import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

//employee
const UserSidebar = () => {
  return (
    <div style={{ display: 'flex', height: '94vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#00B9FF">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Employee</CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/login/EmployeeDashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="calendar">Calendar</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/EmployeeDashboard/leaverequests" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Apply For Leaves</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/EmployeeDashboard/leavehistory" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Leave History</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/EmployeeDashboard/absenteeism" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Leave Absentieesm</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/EmployeeDashboard/leavebalance" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Leave Balance</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/EmployeeDashboard/editinfo" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Edit Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/EmployeeDashboard/view" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">View My Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/EmployeeDashboard/logout" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default UserSidebar;