import React from "react";
import '../../Admin/Charts/Charts.css';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { department: "Cardiology", approved: 30, cancelled: 10, beingMade: 15 },
  { department: "Neurology", approved: 25, cancelled: 8, beingMade: 12 },
  { department: "Orthopedics", approved: 20, cancelled: 5, beingMade: 10 },
  { department: "Pediatrics", approved: 40, cancelled: 12, beingMade: 18 },
  { department: "Dermatology", approved: 22, cancelled: 6, beingMade: 14 },
  { department: "Oncology", approved: 18, cancelled: 7, beingMade: 9 },
  { department: "Psychiatry", approved: 28, cancelled: 10, beingMade: 13 },
  { department: "ENT", approved: 35, cancelled: 15, beingMade: 20 },
  { department: "Gastroenterology", approved: 32, cancelled: 9, beingMade: 16 },
];

function BarchartAdmin() {
  return (
    <div className="container">
      <h2>Department-wise Appointments</h2>

      {/* Button to check if React is working */}
      {/* <button onClick={() => setCount(count + 1)}>Click Me {count}</button> */}

      {/* Chart Wrapper */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="department" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="approved" fill="#4CAF50" name="Approved" />
            <Bar dataKey="cancelled" fill="#F44336" name="Cancelled" />
            <Bar dataKey="beingMade" fill="#FFC107" name="Being Made" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarchartAdmin;
    








