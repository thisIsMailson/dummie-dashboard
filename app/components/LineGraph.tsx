// GraphComponent.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineGraphComponent = ({ data }: any) => {
  const uniqueBuildings = [
    // @ts-ignore
    ...new Set(data.map((item: { building: any }) => item.building)),
  ];
  const getRandomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {uniqueBuildings.map((building) => (
          <Line
            key={building}
            type="monotone"
            dataKey="value"
            name={building}
            data={data.filter((item: any) => item.building === building)}
            stroke={getRandomColor()}
          />
        ))}
      </LineChart>
    </div>
  );
};

export default LineGraphComponent;
