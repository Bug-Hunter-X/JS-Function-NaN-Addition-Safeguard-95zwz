# JavaScript Function: Improper NaN Handling in Addition

This repository demonstrates a common error in JavaScript functions that involve numerical operations: improper handling of NaN (Not a Number) values. The original code does not explicitly check for NaN, leading to unexpected results when adding NaN to other numbers.

## Bug Description
The function `foo` adds two numbers. However, if either `a` or `b` is NaN, the result is NaN, which can propagate errors throughout the program.

## Solution
The solution involves explicitly checking for NaN using `isNaN()` before performing the addition. If either input is NaN, a suitable alternative action is taken, such as returning a default value or throwing an error.

## How to Run
1. Clone this repository.
2. Open `bug.js` to see the original code with the bug.
3. Open `bugSolution.js` to see the corrected code.
4. Run the JavaScript files in a browser console or using Node.js.