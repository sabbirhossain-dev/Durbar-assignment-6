function diagonalSums(matrix) {
  let mainSum = 0;
  let secondarySum = 0;
  for (let i = 0; i < matrix.length; i++) {
    mainSum += matrix[i][i];
    secondarySum += matrix[i][matrix.length - 1 - i];
  }
  return {
    main: mainSum,
    secondary: secondarySum,
  };
}

console.log(
  diagonalSums([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);

console.log(
  diagonalSums([
    [1, 2],
    [3, 4],
  ]),
);
