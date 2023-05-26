import "./sidebar.css";
import { FaTags } from "react-icons/fa";
import { HiChartPie, HiUserCircle } from "react-icons/hi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="burger" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="sidebarContent">
        <div className="sidebarContent_sub_main">
          <h3 className="sidebarTitle">Board.</h3>
          <div className="sidebarMenu">
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <HiChartPie className="sidebarIcon" />
                <span>Dashboard</span>
              </li>
              <li className="sidebarListItem">
                <FaTags className="sidebarIcon" />
                <span>Transactions</span>
              </li>
              <li className="sidebarListItem">
                <BsFillCalendarCheckFill className="sidebarIcon" />
                <span>Schedules</span>
              </li>
              <li className="sidebarListItem">
                <HiUserCircle className="sidebarIcon" />
                <span>Users</span>
              </li>
              <li className="sidebarListItem">
                <AiFillSetting className="sidebarIcon" />
                <span>Settings</span>
              </li>
            </ul>
            <div className="helpers">
              <span>Help</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
