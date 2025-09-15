"use client";
import React, { useState, useEffect } from 'react';
import { getTodaysGasPrice } from './hooks/collect-api-gas-prices';

export default function TodaysGasPrice() {
    const [gasState, setGasState] = useState("TX");
    const { data, isLoading, error } = getTodaysGasPrice(gasState);

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
                Gas Price: {data?.price ?? 0}
                Pick a state: 
                <select name="selectedState" value={gasState} onChange={e => setGasState(e.target.value)}>
                    <option value="TX">Texas</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="NY">New York</option>
                </select>
            </main>
        </div>
    );
}