import Bars from "./components/Bars";
import ToggleStats from "./components/ToggleStats";

export default function Home() {
  return (
    <div className="mb-12">
      <ToggleStats />
      <Bars />
    </div>
  )
}