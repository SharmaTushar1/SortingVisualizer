'use client';

import { useStore } from "@/app/store"
import bubbleSort from '../lib/bubbleSort';
import { useState, useEffect } from "react";
import {motion, AnimatePresence} from 'framer-motion';

export default function Bars() {

  const propsData = useStore((state) => state);

  const [isSorting, setIsSorting] = useState(false);

  let audioCtx:any = null;

  function playNote(freq: number) {
    if (audioCtx == null) {
      audioCtx = new (
        AudioContext ||
        webkitAudioContext ||
        window.webkitAudioContext
      )();
    }
    const dur = 0.1;
    const osc = audioCtx.createOscillator();
    osc.frequency.value = freq;
    osc.start();
    osc.stop(audioCtx.currentTime+dur);
    osc.connect(audioCtx.destination);
  }

  // So basically, just just do the swapping when the value of isSorting is changed.
  //! Also, don't change this code took sm time.
  useEffect(() => {
    // if isSorting is false, return
    if (!isSorting) return;
    // make a copy of the swaps array
    const copyArray = [...propsData.array];
    let swaps: number[][] = [];
    if (propsData.algorithm === 'bubbleSort') {
      swaps = bubbleSort(copyArray).swaps;
    } else if (propsData.algorithm === 'insertionSort') {
      // swaps = insertionSort(copyArray).swaps;
    } else if (propsData.algorithm === 'mergeSort') {
      // swaps = insertionSort(copyArray).swaps;
    }
    const swapsArray = [...swaps]
    // define a function to iterate over the swaps array
    const newArray = [...propsData.array];
    // so basically, now this function is where sorting is happening. The swapping of values if I might say.
    // NOTE: This is not the sorting algorithm. The algorithm is already done. Now we are using the swapping values from the sorting algorithm to animate it.
    // Just swap as the algorithm was done. So the logs from the bubble sort or whatever algorithm will be used. Hence, this is algorithm agnostic as we are just using the swapping array.
    const animateSwaps = () => {
      // if there are no more swaps, return and set isSorting to false
      if (swapsArray.length === 0) {
        setIsSorting(false);
        return;
      }
      // get the first pair of indexes from the swaps array
      const [i, j] = swapsArray.shift()!;
      // make a copy of the array and swap the values
      const div1 = document.getElementById(`bar-${i}`);
      const div2 = document.getElementById(`bar-${j}`);
      // console.log("div1 => ", div1, " div2 => ", div2, ` bars-${newArray[i]} bars-${newArray[j]}`);
      playNote(i+300);
      playNote(j+300);
      if (div1 && div2) {
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
      }
      setTimeout(function() {
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        if (div1 && div2) {
          div1.style.backgroundColor = '';
          div2.style.backgroundColor = '';
        }
      }, 50); // this should be same as the time below TODO: use a variable here ig
      // update the state with the new array
      propsData.setArray(newArray);
      // call the function again after 200ms
      setTimeout(animateSwaps, 50);
    };
    // call the function for the first time
    animateSwaps();
  }, [isSorting])

  // const sortArray = (algorithm: string) => {
  //   if (isSorting) return;
  //   if (algorithm === 'bubbleSort') {
  //     const copyArray = [...propsData.array];
  //     const swaps: number[][] = bubbleSort(copyArray).swaps;
  //     console.log("Swaps => ", swaps);
  //   }
  // }

  return (
    <div className="flex w-[90vw] absolute -left-2 sm:-left-8 lg:-left-28 justify-evenly items-end h-[500px]">
      <AnimatePresence>
        {
          propsData.array.map((item, index) => (
            <motion.div key={index} id={`bar-${index}`} className="array-bar dark:bg-zinc-700 bg-zinc-300 max-w-full w-[3px] min-w-[2px] flex-grow-[1] border border-zinc-400 dark:border-zinc-800" style={{height: `${item*2}px`}}
            ></motion.div>
          ))
        }
      </AnimatePresence>
      <button className="bg-zinc-200 dark:bg-zinc-800 text-2xl py-4 px-6 absolute -bottom-20 border-none rounded-xl"
            onClick={() => {
              setIsSorting(true);
            }}
          >
        {isSorting?'Sorting...':'Sort!!'}
      </button>
    </div>
  )
}