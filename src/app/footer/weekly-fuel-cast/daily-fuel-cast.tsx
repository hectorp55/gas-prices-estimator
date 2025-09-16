"use client";

import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";

type DailyFuelProps = {
    date: string,
    price: string,
    trend: number,
    className?: string
}

const DailyFuelCast: React.FC<DailyFuelProps> = ({date, price, trend, className}) => {
    const trendColor = trend == 0 ? "text-orange-500" : trend > 0 ? "text-red-500" : "text-green-500"
    
    return (
        <div className={`${className} flex flex-col`}>
            {trend > 0 && <span className={`text-5xl ${trendColor} flex flex-row justify-center`}><FaArrowAltCircleUp/></span>}
            {trend < 0 && <span className={`text-5xl ${trendColor} flex flex-row justify-center`}><FaArrowAltCircleDown/></span>}
            {trend == 0 && <span className={`text-5xl ${trendColor} flex flex-row justify-center`}><FaArrowAltCircleRight/></span>}
            <span>{date}</span>
            <span className={`${trendColor}`}>${price}</span>
        </div>
    );
}

export default DailyFuelCast;