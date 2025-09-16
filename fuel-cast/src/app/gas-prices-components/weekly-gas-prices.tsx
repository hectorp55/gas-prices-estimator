"use client";
import React, { useState, useEffect } from 'react';
import { getWeeklyGasPrices } from './hooks/collect-api-gas-prices';

export default function WeeklyGasPrices() {
    const { data, isLoading, error } = getWeeklyGasPrices();

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
                Weekly Price: {data?.prices.map((week) => {
                    return <span key={week.period}>Date: {week.period} Price: {week.value}</span>
                })}
            </main>
        </div>
    );
}