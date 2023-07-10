import React from "react";
import UserSidebar from "../UserSidebar/index";
import Header from "../../header";
import Calendar from "../../Calendar";

function EmployeeDashboard() {
  return (
    <div>
      <Header />
     <div style={{ display: "flex" }}>
        <UserSidebar />
        <div>
          <Calendar />

        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
