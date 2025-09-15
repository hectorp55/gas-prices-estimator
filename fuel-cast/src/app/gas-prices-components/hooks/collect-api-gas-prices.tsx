"use client";
import { useQuery } from "@tanstack/react-query";

async function fetchTodaysGasPrice() {
    const response = await fetch('api/gas-prices');
    if (!response.ok) {
        throw new Error('Problem with gas prices');
    }
    const data = await response.json();
    console.log(data);

    return { price: data.result.state[0].gasoline };
}

export const getTodaysGasPrice = () => {
    return useQuery({
        queryKey: ['stateUsePrice'], // Unique key for this query
        queryFn: fetchTodaysGasPrice, // Function to fetch data
    });
}