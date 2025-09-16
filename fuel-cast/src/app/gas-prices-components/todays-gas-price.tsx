"use client";
import React, { useState, useEffect } from 'react';
import { getTodaysGasPrice } from './hooks/collect-api-gas-prices';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';

type TodaysGasPriceProps = {
    averagePrice: number,
    todaysPrice: number,
    className?: string
}

const TodaysGasPrice: React.FC<TodaysGasPriceProps> = ({averagePrice, todaysPrice, className}) => {
    const trendColor = averagePrice < todaysPrice ? "text-red-500" : "text-green-500";
    return (
        <div className={`${className} flex flex-row`}>
            <h1 className={`text-5xl flex flex-row justify-center ${trendColor}`}>
                {trendColor == "text-red-500" && <span className={`text-2xl ${trendColor} flex flex-col justify-center`}><FaArrowAltCircleUp/></span>}
                {trendColor == "text-green-500" && <span className={`text-2xl ${trendColor} flex flex-col justify-center`}><FaArrowAltCircleDown/></span>}
                <span className={`text-5xl ${trendColor} flex flex-col justify-center`}>${todaysPrice}</span>
            </h1>
            <div className="flex flex-col justify-center text-gray-500">
                Texas
            </div>
            {/* Pick a state: 
            <select name="selectedState" value={gasState} onChange={e => setGasState(e.target.value)}>
                <option value="TX">Texas</option>
                <option value="PA">Pennsylvania</option>
                <option value="NY">New York</option>
            </select> */}
        </div>
    );
}

export default TodaysGasPrice;