'use client';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

export default function GasLineChart() {

  return (
    <div className="w-full h-100">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
            <CartesianGrid />
            <Line dataKey="uv" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}