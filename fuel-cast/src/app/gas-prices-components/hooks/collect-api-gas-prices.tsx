"use client";
import { useQuery } from "@tanstack/react-query";

async function fetchTodaysGasPrice() {
    const response = await fetch('api/todays-gas-price');
    if (!response.ok) {
        throw new Error('Problem with todays gas prices');
    }
    const data = await response.json();
    console.log(data);

    return { price: data.result.state[0].gasoline };
}

export const getTodaysGasPrice = () => {
    return useQuery({
        queryKey: ['stateTodayGasPrice'],
        queryFn: fetchTodaysGasPrice,
    });
}

async function fetchHistoricalGasPrice() {
    const response = await fetch('api/historical-gas-prices');
    if (!response.ok) {
        throw new Error('Problem with historical gas prices');
    }
    const data = await response.json();
    console.log(data);

    return { prices: data.observations };
}

export const getHistoricalGasPrices = () => {
    return useQuery({
        queryKey: ['historicalGasPrices'],
        queryFn: fetchHistoricalGasPrice,
    });
}