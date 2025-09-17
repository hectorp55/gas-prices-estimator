"use client";

import { useEffect, useState } from "react";
import { useTodaysGasPrice, useWeeklyGasPrices } from "../gas-prices-components/hooks/collect-api-gas-prices";
import { Week } from "../models/week";

type DailyFuelProps = {
    className?: string
}

const decreaseInsight = "Gas prices expected to decrease over the next week. Fill up your tank while you can.";
const increaseInsight = "Gas prices expected to increase over the next week. Fill up your tank while you can.";

const Insights: React.FC<DailyFuelProps> = ({className}) => {
    const [averageGasPrice, setAverageGasPrice] = useState(0);
    const [todaysPrice, setTodaysPrice] = useState(0);
    
    const { data: todaysData, isLoading: isDailyLoading, error: dailyError } = useTodaysGasPrice("TX");
    const { data: weeklyData, isLoading: isWeeklyLoading, error: weeklyError } = useWeeklyGasPrices();
    
    useEffect(() => {
        setAverageGasPrice(weeklyData?.averagePrice ?? 0);
        setAverageGasPrice(Number(todaysData?.price) ?? 0);
    }, [weeklyData, todaysData]);
        
    if (isDailyLoading || isWeeklyLoading) {
        return ("Loading");
    }
    if (dailyError || weeklyError) {
        return (
            <div>Error: {dailyError?.message ?? ""} {weeklyError?.message ?? ""}</div>
        );
    }
    
    const suggestion = averageGasPrice < todaysPrice;

    return (
        <p className="text-center">{suggestion ? decreaseInsight : increaseInsight}</p>
    );
}

export default Insights;