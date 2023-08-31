// FIXME: This doesn't work. I'll have to pass the indices also.

const swaps: number[][] = [];

export default function mergeSort(array: number[]) {

  helper(array);

  // for (let i = 1; i<array.length; i++) {
  //   let j = i;
  //   while (j>0 && array[j-1]>array[j]) {
  //     [array[j-1], array[j]] = [array[j], array[j-1]];
  //     swaps.push([j-1, j])
  //     j--;
  //   }
  // }

  return {array, swaps};
}

function helper(array: number[]) : number[] {
  if (array.length == 1) return array;
  let n = (parseInt((array.length/2).toLocaleString()));
  let arrayOne = array.slice(0, n);
  let arrayTwo = array.slice(n+1, array.length)

  arrayOne = helper(arrayOne);
  arrayTwo = helper(arrayTwo);

  return merge(arrayOne, arrayTwo);
}

function merge(a: number[], b: number[]): number[] {
  const c: number[] = [];

  while (a.length>0 && b.length>0) {
    if (a[0] > b[0]) { // FIXME: here, can't push 0 I need index.
      c.push(b[0]);
      b.pop();
    } else {
      c.push(a[0]);
      a.pop();
    }
    while (a.length > 0) {
      c.push(a[0]);
      a.pop();
    }
    while (b.length > 0 ) {
      c.push(b[0]);
      b.pop();
    }
  }
  return c;

}