import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Cancelled", value: 30 , label: 'series A'},
  { name: "Appointments", value: 50, label: 'series A' },
  { name: "Deleted", value: 20 , label: 'series A'},
  { name: "Approved", value: 40, label: 'series A' },
];

const COLORS = ["#FF0000", "#0088FE", "#FFBB28","#198754"]; // Red, Blue, Yellow,Green

const AppointmentPieChart = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PieChart width={450} height={450}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
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
