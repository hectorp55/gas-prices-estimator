"use client";
import React, { useState, useEffect } from 'react';
import { getTodaysGasPrice, getWeeklyGasPrices } from "../gas-prices-components/hooks/collect-api-gas-prices";
import TodaysGasPrice from "../gas-prices-components/todays-gas-price";
import TodaysInformation from "./todays-information";

export default function Header() {
  const [averageGasPrice, setAverageGasPrice] = useState(0);

  const { data: todaysData, isLoading: isDailyLoading, error: dailyError } = getTodaysGasPrice("TX");


  const { data: weeklyData, isLoading: isWeeklyLoading, error: weeklyError } = getWeeklyGasPrices();

  useEffect(() => {
    const sum = weeklyData?.prices.reduce((accumulator, week) => {
      return accumulator + week.value;
    });
    const average = sum / weeklyData?.prices.length;
    setAverageGasPrice(average);
  }, [weeklyData]);
    
  if (isDailyLoading || isWeeklyLoading) {
      return ("Loading");
  }
  if (dailyError || weeklyError) {
      return (
          <div>Error: {dailyError?.message ?? ""} {weeklyError?.message ?? ""}</div>
      );
  }

  const suggestion = averageGasPrice < todaysData?.price ? "Pump!" : "Hold!";

  return (
    <div className="flex flex-row justify-evenly m-10">
        <TodaysGasPrice averagePrice={averageGasPrice} todaysPrice={todaysData?.price}></TodaysGasPrice>
        {suggestion == "Pump!" && <div className="flex flex-col justify-center text-6xl text-green-500">{suggestion}</div>}
        {suggestion == "Hold!" && <div className="flex flex-col justify-center text-6xl text-red-500">{suggestion}</div>}
        <TodaysInformation></TodaysInformation>
    </div>
  );
}