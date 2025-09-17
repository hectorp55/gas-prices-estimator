"use client";
import { Week } from "@/app/models/week";
import { useQuery, QueryFunctionContext } from "@tanstack/react-query";

async function fetchTodaysGasPrice({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) {
    const [_, stateId] = queryKey;
    const response = await fetch(`api/todays-gas-price?state=${stateId}`);
    if (!response.ok) {
        throw new Error('Problem with todays gas prices');
    }
    const data = await response.json();

    return { price: data.result.state[0].gasoline };
}

export const useTodaysGasPrice = (state: string) => {
    return useQuery({
        queryKey: ['stateTodayGasPrice', state],
        queryFn: fetchTodaysGasPrice,
    });
}

async function fetchHistoricalGasPrice() {
    const response = await fetch('api/historical-gas-prices');
    if (!response.ok) {
        throw new Error('Problem with historical gas prices');
    }
    const data = await response.json();

    return { prices: data.observations };
}

export const useHistoricalGasPrices = () => {
    return useQuery({
        queryKey: ['historicalGasPrices'],
        queryFn: fetchHistoricalGasPrice,
    });
}

async function fetchWeeklyGasPrice() {
    const response = await fetch('api/weekly-gas-prices');
    if (!response.ok) {
        throw new Error('Problem with historical gas prices');
    }
    const data = await response.json();
    const weeklyData = data.response.data;
    var sum = 0;
    var high = weeklyData?.[0].value ?? 0;
    var low = weeklyData?.[0].value ?? 0;
    weeklyData?.forEach((week: Week) => {
        var weeklyPrice = Number(week.value);
        sum += weeklyPrice;
        if (high < weeklyPrice) {
            high = weeklyPrice;
        }
        if (low > weeklyPrice) {
            low = weeklyPrice
        }
    });
    const average = sum / weeklyData?.length;

    return { prices: weeklyData, averagePrice: average, highPrice: high, lowPrice: low };
}

export const useWeeklyGasPrices = () => {
    return useQuery({
        queryKey: ['weeklyGasPrices'],
        queryFn: fetchWeeklyGasPrice,
    });
}