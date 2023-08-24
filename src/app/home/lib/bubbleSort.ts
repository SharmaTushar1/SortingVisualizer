export default function bubbleSort(array: number[]) {
  const swaps = [];
  do {
    var swapped = false;
    for (let i=1; i<array.length; i++) {
      if (array[i-1]>array[i]) {
        swapped = true;
        swaps.push([i-1, i]);
        [array[i-1], array[i]] = [array[i], array[i-1]];
      }
    }
  } while (swapped);
  return {array, swaps};
}