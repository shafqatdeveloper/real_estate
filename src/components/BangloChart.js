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

const BangloChart = () => {
  const data = [
    { name: "January", value: 47463 },
    { name: "February", value: 19381 },
    { name: "March", value: 43784 },
    { name: "April", value: 34521 },
    { name: "May", value: 45224 },
    { name: "June", value: 12434 },
    { name: "July", value: 21033 },
    { name: "August", value: 38920 },
    { name: "September", value: 27500 },
    { name: "October", value: 47601 },
    { name: "November", value: 48210 },
    { name: "December", value: 19320 },
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
        <Line type="monotone" dataKey="value" stroke="#CE8F04" />
      </LineChart>

      <div className="w-full text-center my-2">
        <h1 className="text-lg font-extrabold font-sans">
          Banglo Price Index 2022
        </h1>
      </div>
    </div>
  );
};

export default BangloChart;
