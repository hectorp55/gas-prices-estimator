import Image from "next/image";
import TodaysDate from "./date-component/todays-date";

export default function Home() {
  return (
    <div className="whole-app">
      <main>
        Hello Hector Puga
        <TodaysDate></TodaysDate>
      </main>
    </div>
  );
}
