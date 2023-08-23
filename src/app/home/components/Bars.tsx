'use client';

import { useStore } from "@/app/store"

export default function Bars() {

  const propsData = useStore((state) => state);

  const array: number[] = [];

  for (let i = 1; i<=propsData.arraySize; i++) {
    array.push(Math.random()*200);
  }

  console.log(array);

  return (
    <div className="flex w-screen absolute left-0 justify-evenly items-end h-[500px] px-12">
      {
        array.map((item, index) => (
          <div key={index} className="dark:bg-zinc-700 bg-zinc-300 max-w-full min-w-[3px] flex-grow-[1] border border-zinc-400 dark:border-zinc-800" style={{height: `${item*2}px`}}></div>
        ))
      }
    </div>
  )
}