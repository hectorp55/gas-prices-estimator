import GasLineChart from "./charts/gas-line-chart";
import WeeklyFuelCast from "./footer/weekly-fuel-cast/weekly-fuel-cast";
import Header from "./header/header";

export default function Home() {
  return (
    <div className="whole-app">
      <header>
        <Header></Header>
      </header>
      <main>
        <GasLineChart></GasLineChart>
      </main>
      <footer>
        <WeeklyFuelCast></WeeklyFuelCast>
      </footer>
    </div>
  );
}
