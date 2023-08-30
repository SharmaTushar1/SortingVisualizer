export default function insertionSort(array: number[]) {
  const swaps = [];
  for (let i = 1; i<array.length; i++) {
    let j = i;
    while (j>0 && array[j-1]>array[j]) {
      [array[j-1], array[j]] = [array[j], array[j-1]];
      swaps.push([j-1, j])
      j--;
    }
  }
  return {array, swaps};
}