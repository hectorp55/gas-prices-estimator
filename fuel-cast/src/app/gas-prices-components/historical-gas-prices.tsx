"use client";
import React, { useState, useEffect } from 'react';
import { getHistoricalGasPrices } from './hooks/collect-api-gas-prices';

export default function HistoricalGasPrices() {
    const { data, isLoading, error } = getHistoricalGasPrices();

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
                Historical Price: {data?.prices.map((observation) => {
                    return <span key={observation.date}>Date: {observation.date} Price: {observation.value}</span>
                })}
            </main>
        </div>
    );
}