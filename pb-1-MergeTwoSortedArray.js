function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;

  const result = [];

  // Compare and merge both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result[k] = arr1[i];
      i++;
    } else {
      result[k] = arr2[j];
      j++;
    }

    k++;
  }

  // Copy remaining elements from arr1
  while (i < arr1.length) {
    result[k] = arr1[i];
    i++;
    k++;
  }

  // Copy remaining elements from arr2
  while (j < arr2.length) {
    result[k] = arr2[j];
    j++;
    k++;
  }

  return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([], [1, 2]));
// [1, 2]
console.log(mergeSortedArrays([], [100]));

console.log(mergeSortedArrays([], [1, 2]));
// [1, 2]
console.log(mergeSortedArrays([], [100]));
