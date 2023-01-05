import React from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const HomeChart = () => {
  const data = [
    { name: "January", value: 37225 },
    { name: "February", value: 11881 },
    { name: "March", value: 22234 },
    { name: "April", value: 54200 },
    { name: "May", value: 19400 },
    { name: "June", value: 51236 },
    { name: "July", value: 31020 },
    { name: "August", value: 41200 },
    { name: "September", value: 36040 },
    { name: "October", value: 56000 },
    { name: "November", value: 42610 },
    { name: "December", value: 27604 },
  ];
  return (
    <div className="w-full h-full">
      <LineChart
        width={350}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>

      <div className="w-full text-center my-2">
        <h1 className="text-lg font-extrabold font-sans">
          House Price Index 2022
        </h1>
      </div>
    </div>
  );
};

export default HomeChart;
