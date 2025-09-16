"use client";
import { useHistoricalGasPrices } from './hooks/collect-api-gas-prices';

type Observation = {
    date: string,
    value: string
}

export default function HistoricalGasPrices() {
    const { data, isLoading, error } = useHistoricalGasPrices();

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
                Historical Price: {data?.prices.map((observation: Observation) => {
                    return <span key={observation.date}>Date: {observation.date} Price: {observation.value}</span>
                })}
            </main>
        </div>
    );
}