function isValidEmail(email) {
  const parts = email.split("@");

  if (parts.length !== 2) return false;

  const [local, rest] = parts;

  if (!local) return false;

  const domainParts = rest.split(".");

  if (domainParts.length !== 2) return false;

  const [domain, tld] = domainParts;

  if (!domain || tld.length < 2) return false;

  const isLetterOrDigit = (ch) =>
    (ch >= "a" && ch <= "z") ||
    (ch >= "A" && ch <= "Z") ||
    (ch >= "0" && ch <= "9");

  for (const ch of local) {
    if (!isLetterOrDigit(ch) && !"._-".includes(ch)) {
      return false;
    }
  }

  for (const ch of domain) {
    if (!isLetterOrDigit(ch) && ch !== "-") {
      return false;
    }
  }

  for (const ch of tld) {
    if (!((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))) {
      return false;
    }
  }

  return true;
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid.email@")); // false
console.log(isValidEmail("abc@domain.c")); // false
console.log(isValidEmail("abc@domain.com")); // true
console.log(isValidEmail("abc@domin.com")); // true
console.log(isValidEmail("abc@domain.com")); // true
console.log(isValidEmail("abc@omain.com")); // true
