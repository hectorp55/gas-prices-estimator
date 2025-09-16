"use client";
import { Week } from '../models/week';
import { useWeeklyGasPrices } from './hooks/collect-api-gas-prices';

export default function WeeklyGasPrices() {
    const { data, isLoading, error } = useWeeklyGasPrices();

    if (isLoading) {
        return ("Loading");
    }
    if (error) {
        return (
            <div>Error: {error.message}</div>
        );
    }
  
    return (
        <div className="todays-date">
            <main>
                Weekly Price: {data?.prices.map((week: Week) => {
                    return <span key={week.period}>Date: {week.period} Price: {week.value}</span>
                })}
            </main>
        </div>
    );
}