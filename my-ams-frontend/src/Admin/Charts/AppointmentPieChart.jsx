import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useState, useEffect } from "react";
import { adminApi } from "../../Api-folder/Api";

const data = [
  { name: "Cancelled", value: 30, label: "series A" },
  { name: "Appointments", value: 50, label: "series A" },
  { name: "Deleted", value: 20, label: "series A" },
  { name: "Approved", value: 40, label: "series A" },
];

const COLORS = ["#FF0000", "#0088FE", "#FFBB28", "#198754"]; // Red, Blue, Yellow,Green

const AppointmentPieChart = () => {
  const [Data, SetData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await adminApi.BarChartApi();
      console.log("Response from total appointment chart-----", response.data);
      if (response.data) {
        const transformedData = response.data.map(item => ({
          name: item._id,
          value: item.count
        }));
        SetData(transformedData);
        console.log("Transformed data for chart", transformedData);
      }
    } catch (err) {
      console.error("This is a catch error", err);
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen">
      <PieChart width={450} height={450}>
        <Pie
          data={Data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {Data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default AppointmentPieChart;
