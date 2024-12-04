function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 0; // Or throw an error: throw new Error('NaN values encountered');
  } else if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(NaN, 2)); // Output: 0
console.log(foo(1, NaN)); // Output: 0
console.log(foo(NaN, NaN)); // Output: 0
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0