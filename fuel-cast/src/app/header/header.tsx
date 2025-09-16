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
    const sum = weeklyData?.prices.reduce((accumulator: number, week) => accumulator + Number(week.value), 0);
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

  const suggestion = averageGasPrice < todaysData?.price ? "Hold!" : "Pump!";
  console.log(`AVG ${averageGasPrice} Today ${todaysData?.price}`)

  return (
    <div className="flex flex-row justify-evenly m-10">
        <TodaysInformation></TodaysInformation>
        {suggestion == "Pump!" && <div className="flex flex-col justify-center text-6xl text-green-500">
          <img className="w-20" src="./pump-green.png"></img>
          <span className="text-center">{suggestion}</span>
          </div>}
        {suggestion == "Hold!" && <div className="flex flex-col justify-center text-2xl text-red-500">
          <img className="w-20" src="./hold-red.png"></img>
          <span className="text-center">{suggestion}</span>
          </div>}
        <TodaysGasPrice averagePrice={averageGasPrice} todaysPrice={todaysData?.price}></TodaysGasPrice>
    </div>
  );
}