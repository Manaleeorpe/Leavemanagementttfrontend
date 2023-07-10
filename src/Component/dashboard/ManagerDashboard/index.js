import React from "react";
import Sidebar from "../Sidebar/index";
import Header from "../../header";
import Calendar from "../../Calendar";

function ManagerDashboard() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default ManagerDashboard;
