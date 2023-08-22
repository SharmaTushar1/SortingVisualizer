'use client';

import {useState} from 'react';

type stats = {
  algorithm: string,
  timeTaken: string,
  comparisonsMade: string,
  isStable: boolean,
  memoryUsage: string,
  arraySize: number,
}

export default function ToggleStats() {

  const [visible, setVisible] = useState(false);

  const [algorithm, setAlgorithm] = useState("");

  const [timeTaken, setTimeTaken] = useState("");

  const [comparisonsMade, setComparisonsMade] = useState("");

  const [isStable, setIsStable] = useState(false);

  const [memoryUsage, setMemoryUsage] = useState("");

  const [arraySize, setArraySize] = useState(0);

  const props:stats = {
    algorithm,
    timeTaken,
    comparisonsMade,
    isStable,
    memoryUsage,
    arraySize,
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
        <input type="range" min="1" max="100" value={props.arraySize}/>
      </div>
    </div>
  );
}
