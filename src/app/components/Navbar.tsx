import Link from "next/link";
import ThemeToggleIcon from "./ThemeToggleIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="flex justify-between mt-4">
      <Link href={'/'} className="text-2xl">Sorting Visualizer</Link>
      <div className="flex w-[58px] items-center justify-between">
        <ThemeToggleIcon />
        <Link href={"https://github.com/SharmaTushar1/SortingVisualizer"}>
          <FontAwesomeIcon icon={faCode} className="fa-lg" />
        </Link>
      </div>
    </div>
  )
}