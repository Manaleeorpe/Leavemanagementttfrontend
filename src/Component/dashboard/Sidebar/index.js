import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

//Manager
const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '94vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#00B9FF" breakpoint={720}  >
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Manager</CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/login/ManagerDashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="calendar">Calendar</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/ManagerDashboard/manageleaves" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Manage Leaves</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/ManagerDashboard/leaverequests" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Apply For Leaves</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/ManagerDashboard/leavehistory" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Leave History</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/ManagerDashboard/absenteeism" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Leave Absentieesm</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/ManagerDashboard/leavebalance" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Leave Balance</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/ManagerDashboard/editinfo" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Edit Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/ManagerDashboard/viewEmployees" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">View Employees</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/ManagerDashboard/viewManagers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">View Managers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/ManagerDashboard/view" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">View My Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/ManagerDashboard/logout" activeClassName="activeClicked">
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

export default Sidebar;