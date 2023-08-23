import { create } from 'zustand'

interface SliderState {
  algorithm: string;
  setAlgorithm: (newValue: string) => void;
  timeTaken: string;
  setTimeTaken: (newValue: string) => void;
  comparisonsMade: number | undefined;
  setComparisonsMade: (newValue: number | undefined) => void;
  isStable: boolean | undefined;
  setIsStable: (newValue: boolean | undefined) => void;
  memoryUsage: string;
  setMemoryUsage: (newValue: string) => void;
  array: number[];
  setArray: (newArray: number[]) => void;
}

export const useStore = create<SliderState>((set: any) => ({ // FIXME: Change this to actual type of the set function instead of any
  algorithm: '',
  setAlgorithm: (newValue: string) => set({algorithm: newValue}),
  timeTaken: '',
  setTimeTaken: (newValue: string) => set({timeTaken: newValue}),
  comparisonsMade: undefined,
  setComparisonsMade: (newValue: number | undefined) => set({comparisonsMade: newValue}),
  isStable: undefined,
  setIsStable: (newValue: boolean | undefined) => set({isStable: newValue}),
  memoryUsage: '',
  setMemoryUsage: (newValue: string) => set({memoryUsage: newValue}),
  array: [],
  setArray: (newArray: number[]) => set({array: newArray}),
  }
))