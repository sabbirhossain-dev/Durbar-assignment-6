function longestIncreasingStreak(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let currentStreak = 0;
  let maxStreak = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }
  }

  return maxStreak;
}

console.log(longestIncreasingStreak([1, 2, 3, 1, 2])); // 3
console.log(longestIncreasingStreak([5, 4, 3, 2, 1])); // 1
console.log(longestIncreasingStreak([])); // 0
