"use client";
import React, { useState, useEffect } from 'react';
import TodaysGasPrice from '../gas-prices-components/todays-gas-price';
import { useTodaysGasPrice, useWeeklyGasPrices } from '../gas-prices-components/hooks/collect-api-gas-prices';
import { Week } from '../models/week';
import { formatDollar } from '../gas-prices-components/hooks/formatGasPrice';

const TodaysInformtion: React.FC = ({}) => {
    const [averageGasPrice, setAverageGasPrice] = useState(0);
    const [highGasPrice, setHighGasPrice] = useState(0);
    const [lowGasPrice, setLowGasPrice] = useState(0);

    const { data: todaysData, isLoading: isDailyLoading, error: dailyError } = useTodaysGasPrice("TX");
    const { data: weeklyData, isLoading: isWeeklyLoading, error: weeklyError } = useWeeklyGasPrices();

    useEffect(() => {
        setAverageGasPrice(weeklyData?.averagePrice ?? 0);
        setHighGasPrice(weeklyData?.highPrice ?? 0);
        setLowGasPrice(weeklyData?.lowPrice ?? 0);
    }, [weeklyData]);
        
    if (isDailyLoading || isWeeklyLoading) {
        return ("Loading");
    }
    if (dailyError || weeklyError) {
        return (
            <div>Error: {dailyError?.message ?? ""} {weeklyError?.message ?? ""}</div>
        );
    }

    const suggestion = averageGasPrice < todaysData?.price ? "Higher" : "Lower";

    return (
        <div className="flex flex-row">
            <div className="todays-date flex flex-col justify-center">
                <h3 className="text-center">Texas</h3>
                <TodaysGasPrice averagePrice={averageGasPrice} todaysPrice={todaysData?.price ?? 0}></TodaysGasPrice>
                <h3 className="text-center">{`${suggestion} than average`}</h3>
                <h3 className="text-center">High: {formatDollar(highGasPrice)} Low: {formatDollar(lowGasPrice)}</h3>
            </div>
        </div>
    );
}

export default TodaysInformtion;