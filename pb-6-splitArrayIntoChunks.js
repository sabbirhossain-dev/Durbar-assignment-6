function chunkArray(arr, size) {
  let result = [];

  for (i = 0; i < arr.length; i += size) {
    const chunk = [];

    for (j = i; j < i + size && j < arr.length; j++) {
      chunk[chunk.length] = arr[j];
    }
    result[result.length] = chunk;
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log(chunkArray(["a", "b", "c", "d"], 2));
