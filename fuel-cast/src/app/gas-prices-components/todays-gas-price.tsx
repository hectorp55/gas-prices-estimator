"use client";
import React, { useState, useEffect } from 'react';
import { getTodaysGasPrice } from './hooks/collect-api-gas-prices';

export default function TodaysGasPrice() {
    const { data, isLoading, error } = getTodaysGasPrice();

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
            </main>
        </div>
    );
}