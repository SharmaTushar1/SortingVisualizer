import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="text-6xl">Sorting Visualizer</h1>
      <div>- Tushar Sharma</div>
      <Link href={'/home'}>
        Let&#39;s Sort!!
      </Link>
    </main>
  )
}
