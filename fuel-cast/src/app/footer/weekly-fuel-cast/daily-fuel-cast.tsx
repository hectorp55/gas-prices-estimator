"use client";

type DailyFuelProps = {
    date: string,
    price: string,
    className?: string
}

const DailyFuelCast: React.FC<DailyFuelProps> = ({date, price, className}) => {
    return (
        <div className={`${className} flex flex-col`}>
            <span>Trending Up</span>
            <span>{date}</span>
            <span>{price}</span>
        </div>
    );
}

export default DailyFuelCast;