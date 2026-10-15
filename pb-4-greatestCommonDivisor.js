function gcd(a, b) {
  while (b !== 0) {
    const reminder = a % b;
    a = b;
    b = reminder;
  }

  return a;
}

console.log(gcd(12, 18)); // 6
console.log(gcd(7, 13)); // 1
console.log(gcd(0, 5)); // 5
console.log(gcd(0, 0)); // 0
