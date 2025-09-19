import { formatDollar } from "./hooks/formatGasPrice";

type TodaysGasPriceProps = {
    averagePrice: number,
    todaysPrice: number,
    className?: string
}

const TodaysGasPrice: React.FC<TodaysGasPriceProps> = ({averagePrice, todaysPrice, className}) => {
    const trendColor = averagePrice < todaysPrice ? `text-(--negative-red)` : `text-(--postive-green)`;

    return (
        <div className={`${className} flex flex-row justify-center`}>
            <h1 className={`text-5xl text-center`}>
                {formatDollar(todaysPrice)}
            </h1>
        </div>
    );
}

export default TodaysGasPrice;