import React, { useEffect, useState, useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { TokenContext } from "../../TokenContext";
import "../../App.css";

function Calendar() {
  const [event1, setEvent1] = useState([]);
  const [event2, setEvent2] = useState([]);
  const [event3, setEvent3] = useState([]);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    fetch("http://localhost:8080/leaverequests/2023/07?PrivateKey=" + token)
      .then((response) => response.json())
      .then((data) => {
        const Events1 = data
          .filter((item) => item.status === "approved")
          .map((item) => ({
            title: item.employee.name,
            start: item.startDate,
            end: item.endDate,
            backgroundColor: "green",
          }));
        const Events2 = data
          .filter((item) => item.status === "pending")
          .map((item) => ({
            title: item.employee.name,
            start: item.startDate,
            end: item.endDate,
            backgroundColor: "yellow",
          }));
          const Events3 = data
          .filter((item) => item.status === "rejected")
          .map((item) => ({
            title: item.employee.name,
            start: item.startDate,
            end: item.endDate,
            backgroundColor: "red",
          }));


        setEvent1(Events1);
        setEvent2(Events2);
        setEvent3(Events3);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [token]);

  return (
    <div
      id="calendar"
      className="calendar"
      style={{
        backgroundColor: "#f2f2f2",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "1593px",
      }}
    >
      <FullCalendar
      
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={[...event1, ...event2, ...event3]}
        height={"94vh"}
      />
    </div>
  );
}

export default Calendar;
