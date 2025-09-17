import WeeklyFuelCast from "./weekly-fuel-cast/weekly-fuel-cast";
import Header from "./header/header";
import Insights from "./insights/insights";

export default function Home() {
  return (
    <div className="app">
      {/* Background */}
      <div className=".background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      {/* Main */}
      <div className="m-10 z-5 relative">
        <header>
          <Header></Header>
        </header>
        <main>
          <section>
            <header className="bg-[#545454] opacity-90 mb-1 p-3 rounded-md">
              <Insights></Insights>
            </header>
            <section className="bg-[#545454] opacity-90 p-3 rounded-md">
              <WeeklyFuelCast></WeeklyFuelCast>
            </section>
          </section>
        </main>
        {/* Attribute */}
        <footer className="text-center m-10 text-xs text-[#828181]">
          <a href="https://loading.io/icon/">the icon "spinner" is provided by loading.io</a>
        </footer>
      </div>
    </div>
  );
}
