import TodaysGasPrice from "../gas-prices-components/todays-gas-price";
import TodaysInformation from "./todays-information";

export default function Header() {
  return (
    <div className="flex flex-row justify-evenly m-10">
        <TodaysGasPrice></TodaysGasPrice>
        <div className="flex flex-col justify-center text-6xl text-green-500">Buy Or Hold</div>
        <TodaysInformation></TodaysInformation>
    </div>
  );
}