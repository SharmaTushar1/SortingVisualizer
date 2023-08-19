import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-center items-center flex-col w-fit mx-auto mt-48">
      <h1 className="text-4xl text-center w-fit sm:text-6xl sm:w-fit">Sorting Visualizer</h1>
      <div className="w-full text-right">made by Tushar Sharma</div>
      <Link href={'/home'} className="mt-24 bg-zinc-200 dark:bg-zinc-800 text-sm sm:text-xl p-2 sm:p-6 border-none rounded-xl">
        Let&#39;s Sort!!
      </Link>
    </div>
  )
}