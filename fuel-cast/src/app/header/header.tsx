import TodaysGasPrice from "../gas-prices-components/todays-gas-price";

export default function Header() {
  return (
    <div className="flex flex-row justify-evenly">
        <TodaysGasPrice></TodaysGasPrice>
        <div>Buy Or Hold</div>
        <div>Todays Information</div>
    </div>
  );
}