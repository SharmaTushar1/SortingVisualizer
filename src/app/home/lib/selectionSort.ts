export default function selectionSort(array: number[]) {
  const swaps: number[][] = [];
  for (let j = 0; j<array.length-1; j++) {
    let iMin = j;
    for (let i = j+1; i<array.length; i++) {
      if (array[i] < array[iMin]) {
        iMin = i;
        swaps.push([iMin, i])
      }
    }
    if (iMin != j) {
      swaps.push([j, iMin]);
      [array[j], array[iMin]] = [array[iMin], array[j]];
    }
  }
  return {array, swaps};
}