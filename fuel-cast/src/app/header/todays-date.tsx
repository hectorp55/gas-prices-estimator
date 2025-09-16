"use client";
import React, { useState, useEffect } from 'react';

export default function TodaysDate() {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentDateTime(new Date().toLocaleString());
        }, 1000); // Update every 1 second

        // Function that removes interval on unmount
        return () => {
            clearInterval(timerId);
        };
    }, []);
  
    return (
        <div className="todays-date">
            <main>
                {currentDateTime}
            </main>
        </div>
    );
}