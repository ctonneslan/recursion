function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  let merged = [];
  while (left.length && right.length) {
    merged.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  merged.push(...left, ...right);
  return merged;
}

const arr = JSON.parse(process.argv[2]);
sortedArr = mergeSort(arr);
console.log(sortedArr);
