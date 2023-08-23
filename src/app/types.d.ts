type stats = {
  algorithm: string,
  setAlgorithm: Dispatch<SetStateAction<string>>,
  timeTaken: string,
  setTimeTaken: Dispatch<SetStateAction<string>>,
  comparisonsMade: number | undefined,
  setComparisonsMade: Dispatch<SetStateAction<number | undefined>>,
  isStable: boolean | undefined,
  setIsStable: Dispatch<SetStateAction<boolean | undefined>>,
  memoryUsage: string,
  setMemoryUsage: Dispatch<SetStateAction<string>>,
  array: number[],
  setArray: (newArray: number[]) => any,
}