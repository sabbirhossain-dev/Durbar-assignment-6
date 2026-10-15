function daysBetweenDates(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diff = Math.abs(d1 - d2);

  return diff / (1000 * 60 * 60 * 24);
}

console.log(daysBetweenDates("2020-01-15", "2019-12-31")); //15
console.log(daysBetweenDates("2020-01-15", "2020-01-20")); //5
