"use client";
import TodaysDate from './todays-date';

export default function TodaysInformation() {
    return (
        <div className="flex flex-row">
            <img src="./logo.png" className="w-20 p-1"></img>
            <div className="todays-date flex flex-col justify-center">
                <h1 className="text-3xl text-orange-500">FuelCast</h1>
                <TodaysDate></TodaysDate>
                <div className="text-gray-500">
                    Texas
                </div>
            </div>
        </div>
    );
}