import TodaysInformation from "./todays-information";

export default function Header() {
  return (
    <div className="flex flex-row justify-evenly m-10">
        <TodaysInformation></TodaysInformation>
    </div>
  );
}