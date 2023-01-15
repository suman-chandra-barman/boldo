import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 350 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 350 },
];
const COLORS = ["#69E6A6", "#0DBBFC", "#0A2640"];

function CircleChat() {
  return (
    <PieChart
      width={200}
      height={300}
      margin={{
        top: -100,
        left: -10,
      }}
    >
      <Pie
        data={data}
        cx={110}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Pie
        data={data}
        cx={420}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default CircleChat;
