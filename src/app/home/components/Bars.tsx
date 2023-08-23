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
    <div className="flex w-[90vw] absolute -left-2 sm:-left-8 lg:-left-28 justify-evenly items-end h-[500px]">
      {
        array.map((item, index) => (
          <div key={index} className="dark:bg-zinc-700 bg-zinc-300 max-w-full w-[3px] min-w-[2px] flex-grow-[1] border border-zinc-400 dark:border-zinc-800" style={{height: `${item*2}px`}}></div>
        ))
      }
      <button className="bg-zinc-200 dark:bg-zinc-800 text-2xl py-4 px-6 absolute -bottom-20 border-none rounded-xl ">
        Sort!!
      </button>
    </div>
  )
}