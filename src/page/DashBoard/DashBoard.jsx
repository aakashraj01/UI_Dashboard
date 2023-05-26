import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Navbar";
import FeaturedInfo from "../../components/cards/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import CircleChart from "../../components/pieChart/CircleChart";
import Schedule from "../../components/schedule/Schedule";
import "./dashboard.css";

const DashBoard = () => {
  return (
    <div className="main_container">
      <div className="left_side">
        <Sidebar />
      </div>
      <div className="rightSide">
        <Topbar />
        <FeaturedInfo />
        <Chart />
        <div className="rightSide_Below">
          <CircleChart />
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
