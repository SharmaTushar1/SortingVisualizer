import Bars from "./components/Bars";
import ToggleStats from "./components/ToggleStats";

export default function Home() {
  return (
    <div className="w-full relative">
      <ToggleStats />
      <Bars />
    </div>
  )
}