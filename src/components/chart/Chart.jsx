import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";

const data = [
  { name: "Week 1", Guest: 100, User: 240 },
  { name: "Week 2", Guest: 200, User: 398 },
  { name: "Week 3", Guest: 300, User: 300 },
  { name: "Week 4", Guest: 400, User: 408 },
];

const dateRanges = [
  { label: "May-June 2021", value: [0, 4] },
  { label: "June-July 2021", value: [1, 4] },
  { label: "July-Aug 2021", value: [0, 3] },
];

const Chart = () => {
  const [selectedRange, setSelectedRange] = useState(dateRanges[0]);

  const handleChange = (event) => {
    setSelectedRange(dateRanges[event.target.value]);
  };

  const filteredData = data.slice(
    selectedRange.value[0],
    selectedRange.value[1]
  );

  return (
    <div className="chart_container">
      <div className="chart_sub_main_container">
        <div className="chart-header">
          <h2 className="chart-title">Activities</h2>
          <div style={{ width: "20%", height: "100%" }}>
            <ResponsiveContainer>
              <LineChart data={data}>
                <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" />
                <Line type="monotone" dataKey="User" stroke="#9BDD7C" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="chart-controls">
          <select
            className="chart_pie_selector"
            id="date-range"
            value={dateRanges.indexOf(selectedRange)}
            onChange={handleChange}
          >
            {dateRanges.map((range, index) => (
              <option key={index} value={index}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <LineChart
              data={filteredData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="0" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                wrapperStyle={{
                  position: "absolute",
                  height: "auto",
                  width: "auto",
                  top: "-21px",
                  marginLeft: "11rem",
                }}
                align="left"
                verticalAlign="top"
              />

              <Line
                type="monotone"
                dataKey="Guest"
                stroke="#E9A0A0"
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="User"
                stroke="#9BDD7C"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
