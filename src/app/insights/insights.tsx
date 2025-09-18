"use client";

import { useEffect, useState } from "react";
import { useTodaysGasPrice, useWeeklyGasPrices } from "../gas-prices-components/hooks/collect-api-gas-prices";
import Loading from "../loading";
import ErrorDisplay from "../error";

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
        setTodaysPrice(Number(todaysData?.price) ?? 0);
    }, [weeklyData, todaysData]);
        
    if (isDailyLoading || isWeeklyLoading) {
        return (<Loading></Loading>);
    }
    if (dailyError || weeklyError) {
        return (
            <ErrorDisplay message={`${dailyError?.message ?? "" + weeklyError?.message}`}></ErrorDisplay>
        );
    }
    
    const suggestion = averageGasPrice < todaysPrice;

    return (
        <p className="text-center">{suggestion ? decreaseInsight : increaseInsight}</p>
    );
}

export default Insights;