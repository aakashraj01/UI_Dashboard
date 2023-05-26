import React from "react";
import "./schedule.css";
import { IoIosArrowForward } from "react-icons/io";

const data = [
  {
    heading: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    location: "at Sunset Road, Kuta, Bali ",
    color: " #9BDD7C",
  },
  {
    heading: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    location: "at Central Jakarta ",
    color: " #6972C3",
  },
];

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule_main_sub_container">
        <div className="schdule_container_top">
          <h2 className="schedule-heading">Today's Schedule</h2>
          <span>
            <span className="schedule-heading_span">See All</span>{" "}
            <IoIosArrowForward />
          </span>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="schedule-item "
            style={{ borderLeft: `5px solid${item.color}` }}
          >
            <div className="schedule-item-heading">{item.heading}</div>
            <div className="schedule-item-time">{item.time}</div>
            <div className="schedule-item-location">
              <span>{item.location}</span>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
