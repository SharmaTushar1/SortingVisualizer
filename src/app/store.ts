import { create } from 'zustand'

export const useStore = create((set: any) => ({ // FIXME: Change this to actual type of the set function instead of any
  arraySize: 0,
  setArraySize: (newArraySize: number) => set({arraySize: newArraySize}),
}))