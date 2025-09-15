import TodaysDate from "./date-component/todays-date";
import TodaysGasPrice from "./gas-prices-components/todays-gas-price";

export default function Home() {
  return (
    <div className="whole-app">
      <main>
        Hello Hector Puga
        <TodaysDate></TodaysDate>
        <TodaysGasPrice></TodaysGasPrice>
      </main>
    </div>
  );
}
