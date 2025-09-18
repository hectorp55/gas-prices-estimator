import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";

type DailyFuelProps = {
    date: string,
    price: string,
    trend: number,
    className?: string
}

const DailyFuelCast: React.FC<DailyFuelProps> = ({date, price, trend, className}) => {
    const trendColor = trend == 0 ? "text-(--nuetral-orange)" : trend > 0 ? "text-(--negative-red)" : "text-(--postive-green)";
    const commonIconClasses = `text-5xl ${trendColor} flex flex-row justify-center p-3`;
    
    return (
        <div className={`${className} flex flex-col w-1/5 text-sm`}>
            <h3 className="text-center">{date}</h3>
            {trend > 0 && <span className={commonIconClasses}><FaArrowAltCircleUp/></span>}
            {trend < 0 && <span className={commonIconClasses}><FaArrowAltCircleDown/></span>}
            {trend == 0 && <span className={commonIconClasses}><FaArrowAltCircleRight/></span>}
            <h3 className={`text-center`}>${price}</h3>
        </div>
    );
}

export default DailyFuelCast;