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
  arraySize: number,
  setArraySize: (newArraySize: number) => any,
}