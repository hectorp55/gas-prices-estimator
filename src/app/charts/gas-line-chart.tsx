'use client';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, LabelList } from 'recharts';
import { useWeeklyGasPrices } from '../gas-prices-components/hooks/collect-api-gas-prices';

export default function GasLineChart() {
  const { data: gasData, isLoading, error } = useWeeklyGasPrices();
  
  if (isLoading) {
      return ("Loading");
  }
  if (error) {
      return (
          <div>Error: {error.message}</div>
      );
  }

  return (
    <div className="w-full h-100 p-10">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={gasData?.prices}>
            <CartesianGrid />
            <Line dataKey="value" stroke="#F97316">
              <LabelList dataKey="value" position="top" />
            </Line>
            <XAxis dataKey="period"/>
            <YAxis domain={[2, 4]}/>
            <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}