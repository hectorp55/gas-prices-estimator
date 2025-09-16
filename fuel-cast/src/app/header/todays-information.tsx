"use client";
import TodaysDate from './todays-date';

export default function TodaysInformation() {
    return (
        <div className="todays-date">
            <h1 className="text-3xl">FuelCast</h1>
            <TodaysDate></TodaysDate>
            <div>
                Forecast
            </div>
        </div>
    );
}