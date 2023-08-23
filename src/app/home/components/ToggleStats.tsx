'use client';

import { useStore } from '@/app/store';
import {useState, ChangeEvent, Dispatch, SetStateAction} from 'react';

type stats = {
  algorithm: string,
  setAlgorithm: Dispatch<SetStateAction<string>>,
  timeTaken: string,
  setTimeTaken: Dispatch<SetStateAction<string>>,
  comparisonsMade: string,
  setComparisonsMade: Dispatch<SetStateAction<string>>,
  isStable: boolean,
  setIsStable: Dispatch<SetStateAction<boolean>>,
  memoryUsage: string,
  setMemoryUsage: Dispatch<SetStateAction<string>>,
  arraySize: number,
  setArraySize: (newArraySize: number) => any,
}

export default function ToggleStats() {

  const [visible, setVisible] = useState(false);

  const [algorithm, setAlgorithm] = useState("");

  const [timeTaken, setTimeTaken] = useState("");

  const [comparisonsMade, setComparisonsMade] = useState("");

  const [isStable, setIsStable] = useState(false);

  const [memoryUsage, setMemoryUsage] = useState("");

  const [arraySize, setArraySize] = [useStore(state => state.arraySize), useStore(state => state.setArraySize)];

  const props:stats = {
    algorithm,
    setAlgorithm,
    timeTaken,
    setTimeTaken,
    comparisonsMade,
    setComparisonsMade,
    isStable,
    setIsStable,
    memoryUsage,
    setMemoryUsage,
    arraySize,
    setArraySize,
  }

  const toggleStats = () => {
    console.log(visible);
    setVisible((prev) => !prev);

  }

  return (
    <div className='relative'>
      <div className='absolute flex flex-col right-0 z-10 items-end'>
        <button className="bg-zinc-200 dark:bg-zinc-800 text-sm p-2 border-none rounded-xl w-fit" onClick={() => toggleStats()}>
          {visible ? "Hide Stats": "Show Stats"}
        </button>
        <div className='mt-4'>
          {visible ? <Stats
          {...props}
          />: ""}
        </div>
      </div>
    </div>
  )
}

export function Stats({...props}: stats) {

  const handleChangeSlider = (event: ChangeEvent<HTMLInputElement>) => {
    props.setArraySize(event.target.value as unknown as number);
  }

  return (
    <div className='dark:bg-zinc-700 bg-zinc-300 p-4'>
      <div>
        {/* Sorting... or Shuffling...  */}
        Status: {"Status"}
      </div>
      <div>
        Algorithm: {props.algorithm}
      </div>
      <div>
        {/* Time take for sorting (0 initially) */}
        Total Time Taken: {props.timeTaken}
      </div>
      <div>
        {/* Comparisons made while sorting (0 initially) */}
        Comparisons made: {props.comparisonsMade}
      </div>
      <div>
        {/* True or false */}
        Stable: {props.timeTaken}
      </div>
      <div>
        {/* Memory Usage */}
        Memory Usage: {props.memoryUsage}
      </div>
      <div>
        {/* Array Size */}
        Array Size:
        <input type="range" min="1" max="100" value={props.arraySize} onChange={handleChangeSlider}/>
      </div>
    </div>
  );
}
