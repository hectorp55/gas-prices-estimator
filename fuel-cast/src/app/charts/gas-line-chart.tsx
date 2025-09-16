'use client';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import { getWeeklyGasPrices } from '../gas-prices-components/hooks/collect-api-gas-prices';

export default function GasLineChart() {
  const { data: gasData, isLoading, error } = getWeeklyGasPrices();
  
  if (isLoading) {
      return ("Loading");
  }
  if (error) {
      return (
          <div>Error: {error.message}</div>
      );
  }

  return (
    <div className="w-full h-100">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={gasData?.prices}>
            <CartesianGrid />
            <Line dataKey="value" stroke="#8884d8"/>
            <XAxis dataKey="period"/>
            <YAxis domain={[0, 5]}/>
            <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}