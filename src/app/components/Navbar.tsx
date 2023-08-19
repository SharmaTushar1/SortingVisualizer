import Link from "next/link";
import ThemeToggleIcon from "./ThemeToggleIcon";

export default function Navbar() {
  return (
    <div className="flex justify-between mt-4">
      <Link href={'/'} className="text-2xl">Sorting Visualizer</Link>
      <ThemeToggleIcon />
    </div>
  )
}