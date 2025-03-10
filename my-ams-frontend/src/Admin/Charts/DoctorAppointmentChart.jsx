import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const weeklyData = [
  { day: "Monday", Dr_Smith: 10, Dr_Johnson: 7, Dr_Brown: 5, Dr_Sarad: 6 },
  { day: "Tuesday", Dr_Smith: 8, Dr_Johnson: 12, Dr_Brown: 6, Dr_Sarad: 5 },
  { day: "Wednesday", Dr_Smith: 12, Dr_Johnson: 8, Dr_Brown: 7, Dr_Sarad: 12 },
  { day: "Thursday", Dr_Smith: 7, Dr_Johnson: 10, Dr_Brown: 9, Dr_Sarad: 1 },
  { day: "Friday", Dr_Smith: 11, Dr_Johnson: 6, Dr_Brown: 8, Dr_Sarad: 8 },
  { day: "Saturday", Dr_Smith: 5, Dr_Johnson: 9, Dr_Brown: 12, Dr_Sarad: 4 },
  { day: "Sunday", Dr_Smith: 13, Dr_Johnson: 5, Dr_Brown: 1, Dr_Sarad: 2 }
];

const monthlyData = [
  { week: "Week 1", Dr_Smith: 50, Dr_Johnson: 40, Dr_Brown: 30, Dr_Sarad: 20 },
  { week: "Week 2", Dr_Smith: 45, Dr_Johnson: 38, Dr_Brown: 35, Dr_Sarad: 25 },
  { week: "Week 3", Dr_Smith: 55, Dr_Johnson: 42, Dr_Brown: 32, Dr_Sarad: 30 },
  { week: "Week 4", Dr_Smith: 48, Dr_Johnson: 36, Dr_Brown: 28, Dr_Sarad: 22 },
  { week: "Week 5", Dr_Smith: 48, Dr_Johnson: 36, Dr_Brown: 28, Dr_Sarad: 22 },
  { week: "Week 6", Dr_Smith: 48, Dr_Johnson: 36, Dr_Brown: 28, Dr_Sarad: 22 },
  { week: "Week 7", Dr_Smith: 48, Dr_Johnson: 36, Dr_Brown: 28, Dr_Sarad: 22 }
];

const yearlyData = [
  { month: "Jan", Dr_Smith: 200, Dr_Johnson: 180, Dr_Brown: 150, Dr_Sarad: 100 },
  { month: "Feb", Dr_Smith: 220, Dr_Johnson: 190, Dr_Brown: 160, Dr_Sarad: 120 },
  { month: "Mar", Dr_Smith: 210, Dr_Johnson: 175, Dr_Brown: 155, Dr_Sarad: 110 },
  { month: "Apr", Dr_Smith: 230, Dr_Johnson: 185, Dr_Brown: 170, Dr_Sarad: 130 },
  { month: "May", Dr_Smith: 230, Dr_Johnson: 185, Dr_Brown: 170, Dr_Sarad: 130 },
  { month: "Jun", Dr_Smith: 230, Dr_Johnson: 185, Dr_Brown: 170, Dr_Sarad: 130 },
  { month: "Jul", Dr_Smith: 230, Dr_Johnson: 185, Dr_Brown: 170, Dr_Sarad: 130 },
  { month: "Aug", Dr_Smith: 230, Dr_Johnson: 185, Dr_Brown: 170, Dr_Sarad: 130 },
  { month: "Sep", Dr_Smith: 230, Dr_Johnson: 185, Dr_Brown: 170, Dr_Sarad: 130 },
  { month: "Oct", Dr_Smith: 230, Dr_Johnson: 185, Dr_Brown: 170, Dr_Sarad: 130 },
  { month: "Nov", Dr_Smith: 230, Dr_Johnson: 185, Dr_Brown: 170, Dr_Sarad: 130 },
  { month: "Dec", Dr_Smith: 230, Dr_Johnson: 185, Dr_Brown: 170, Dr_Sarad: 130 },

];

const DoctorAppointmentsChart = () => {
  const [timeframe, setTimeframe] = useState("weekly");

  const getData = () => {
    if (timeframe === "weekly") return weeklyData;
    if (timeframe === "monthly") return monthlyData;
    return yearlyData;
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold  text-center">Doctor Appointments</h2>

      {/* Timeframe Selection */}
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mx-2 rounded ${timeframe === "weekly" ? "bg-primary text-white" : "bg-secondary"}`}
          onClick={() => setTimeframe("weekly")}
        >
          Weekly
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${timeframe === "monthly" ? "bg-primary text-white" : "bg-secondary"}`}
          onClick={() => setTimeframe("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${timeframe === "yearly" ? "bg-primary text-white" : "bg-secondary"}`}
          onClick={() => setTimeframe("yearly")}
        >
          Yearly
        </button>
      </div>

      <ResponsiveContainer width="100%" height={430}>
        <BarChart data={getData()}>
          <XAxis dataKey={timeframe === "weekly" ? "day" : timeframe === "monthly" ? "week" : "month"} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Dr_Smith" fill="#8884d8" />
          <Bar dataKey="Dr_Johnson" fill="#82ca9d" />
          <Bar dataKey="Dr_Brown" fill="#ffc658" />
          <Bar dataKey="Dr_Sarad" fill="#ff6565" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoctorAppointmentsChart;
