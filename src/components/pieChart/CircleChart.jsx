import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./circleChart.css";

const data = [
  { name: "Basic Tees", sales: 400 },
  { name: "Short Pants", sales: 300 },
  { name: "Super Hoodies", sales: 300 },
];

const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];

const CircleChart = () => {
  const [filter, setFilter] = useState("");

  const filteredData = (filter) => {
    switch (filter) {
      case "Jan-Feb":
        return [
          { name: "Basic Tees", sales: 300 },
          { name: "Short Pants", sales: 250 },
          { name: "Super Hoodies", sales: 45 },
        ];
      case "Feb-Mar":
        return [
          { name: "Basic Tees", sales: 150 },
          { name: "Short Pants", sales: 75 },
          { name: "Super Hoodies", sales: 300 },
        ];
      case "Mar-Apr":
        return [
          { name: "Basic Tees", sales: 200 },
          { name: "Short Pants", sales: 500 },
          { name: "Super Hoodies", sales: 50 },
        ];
      case "May-June":
        return [
          { name: "Basic Tees", sales: 450 },
          { name: "Short Pants", sales: 320 },
          { name: "Super Hoodies", sales: 120 },
        ];
      case "June-July":
        return [
          { name: "Basic Tees", sales: 60 },
          { name: "Short Pants", sales: 100 },
          { name: "Super Hoodies", sales: 600 },
        ];
      default:
        return data;
    }
  };

  const products = [
    { key: "0", name: "Basic Tees", percentage: " 55%", color: "#98D89E" },
    {
      key: "1",
      name: "Custom Short Pants",
      percentage: " 31%",
      color: "#F6DC7D",
    },
    { key: "2", name: "Super Hoodies", percentage: " 14%", color: "#EE8484" },
  ];

  const filteredChartData = filteredData(filter);

  return (
    <div className="circleChart_container">
      <div className="circleChart_sub_main_container">
        <div className="circleChartTop">
          <h2 className="circleChart_heading">Top Products</h2>

          <select className="circleChart_dropdown" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All Months</option>
            <option value="Jan-Feb">Jan-Feb 2021</option>
            <option value="Feb-Mar">Feb-Mar 2021</option>
            <option value="Mar-Apr">Mar-Apr 2021</option>
            <option value="May-June">May-June 2021</option>
            <option value="June-July">June-July 2021</option>
          </select>

        </div>
        <div className="circleChart_bottom">
          <ResponsiveContainer
            className="circleChart_pie"
            width="100%"
            height={250}
          >
            <PieChart>
              <Pie
                data={filteredChartData}
                dataKey="sales"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
              >
                {filteredChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="circleChart_bottom_right">
            {products.map((product) => (
              <div key={product.key} className="circleChart_bottom_data">
                <div>
                  <span
                    className="custom-circle"
                    style={{ backgroundColor: `${product.color}` }}
                  ></span>
                  <span className="circleChart_products_name">
                    {product.name}
                  </span>
                </div>
                <span className="circleChart_products_percentage">
                  {product.percentage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleChart;
