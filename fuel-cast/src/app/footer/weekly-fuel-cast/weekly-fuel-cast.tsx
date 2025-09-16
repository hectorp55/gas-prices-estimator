"use client";
import { getWeeklyGasPrices } from '../../gas-prices-components/hooks/collect-api-gas-prices';
import DailyFuelCast from './daily-fuel-cast';

export default function WeeklyFuelCast() {
    const { data, isLoading, error } = getWeeklyGasPrices();

    if (isLoading) {
        return ("Loading");
    }
    if (error) {
        return (
            <div>Error: {error.message}</div>
        );
    }
  
    return (
        <div className="flex flex-row justify-evenly">
            {data?.prices.map((week, index, array) => {
                const isFirstElement = index == 0;
                const previousDayPrice = isFirstElement ? undefined : array[index - 1].value;
                const trend = isFirstElement ? 0 : (week.value > previousDayPrice ? 1 : -1);
                return <DailyFuelCast key={week.period} date={week.period} price={week.value} trend={trend}></DailyFuelCast>
            })}
        </div>
    );
}