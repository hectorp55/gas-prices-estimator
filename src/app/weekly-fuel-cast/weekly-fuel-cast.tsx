"use client";
import { Week } from '@/app/models/week';
import { useWeeklyGasPrices } from '../gas-prices-components/hooks/collect-api-gas-prices';
import DailyFuelCast from './daily-fuel-cast';
import Loading from '../loading';

export default function WeeklyFuelCast() {
    const { data, isLoading, error } = useWeeklyGasPrices();

    if (isLoading) {
        return (<Loading></Loading>);
    }
    if (error) {
        return (
            <div>Error: {error.message}</div>
        );
    }
  
    return (
        <div className="flex flex-row justify-evenly">
            {data?.prices.map((week: Week, index: number, array: Week[]) => {
                const previousDayPrice = index <= 0 ? undefined : array[index - 1].value;
                const trend = previousDayPrice != undefined ? (week.value > previousDayPrice ? 1 : -1) : 0;
                return <DailyFuelCast key={week.period} date={week.period} price={Number(week.value)} trend={trend}></DailyFuelCast>
            })}
        </div>
    );
}