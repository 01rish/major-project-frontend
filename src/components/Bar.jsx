import React from "react";
import { BarChart, Bar as ReactBar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  }
  
];

function Bar() {
  return (
    <>
      <div className="bg-white p-3 rounded-xl flex flex-col justify-center items-center">
        <p className="text-gray-400">Most Demanding Career</p>
        <BarChart width={430} height={200} data={data}>
          {/* <XAxis dataKey="name" />
          <YAxis />
          <Tooltip /> */}
          <XAxis dataKey="name" />
          <YAxis dataKey="uv" />
          <ReactBar dataKey="uv" fill="#692dff" />
        </BarChart>
      </div>
    </>
  );
}

export default Bar;
