<<<<<<< HEAD
# numts
=======
```markdown
# Numts Documentation

Numts is a JavaScript library for numerical computing, offering functionality similar to NumPy in Python.

## Installation

You can install Numts via npm:

```bash
npm install @beawkiattisak/numts
```

## Usage

```javascript
import { Numts } from "numts";

// Create a Numts instance
const numts = new Numts();

// Create an array
const r = numts.array([2, 3, 4]);
console.log(r); // Output: [ 2, 3, 4 ]
console.log((r[1] = 5)); // Output: 5
console.log(r); // Output: [ 2, 5, 4 ]

// Create a full array
const full = numts.full([3, 3], 5);
console.log(full); // Output: [ [ 5, 5, 5 ], [ 5, 5, 5 ], [ 5, 5, 5 ] ]

// Create an array filled with ones
const ones = numts.ones([3, 3]);
console.log(ones); // Output: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ]

// Create an array filled with zeros
const zero = numts.zeros([3, 3]);
console.log(zero); // Output: [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]

// Create an identity matrix
const identity = numts.eyes(5);
console.log(identity); // Output: [ [ 1, 0, 0, 0, 0 ], [ 0, 1, 0, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 0, 1, 0 ], [ 0, 0, 0, 0, 1 ] ]

// Create an array filled with random values
const random = numts.random([3, 3]);
console.log(random); // Output: Random values

// Clip values in an array
const max_value = 4;
const min_value = 1;
const clip_a = [1, 22, 99, 0, 6, 8, -2, 3, 4, 3, 1];
console.log(numts.clip(clip_a, min_value, max_value)); // Output: [ 1, 4, 4, 1, 4, 4, 1, 3, 4, 3, 1 ]

// Find indices where condition is true
const where = [2, 3, 4, 5, 1, 2, 12];
const wherea = numts.where(where, (value) => value % 2 === 0);
console.log(wherea); // Output: [ 0, 2, 5, 6 ]

// Compute percentile
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numts.percentile(a, 50)); // Output: 5.5

const b = [5, 1, 3, 7, 9, 20];
console.log(numts.percentile(b, 25)); // Output: 4

// Slice arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(numts.sliceToEnd(arr, 4)); // Output: [ 5, 6, 7 ]
console.log(numts.sliceArrayRange(arr, 1, 7)); // Output: [ 2, 3, 4, 5, 6, 7 ]
console.log(numts.sliceIndex(arr, 4)); // Output: [ 5 ]
console.log(numts.sliceEndToEnd(arr, 3, 1)); // Output: [ 4, 5, 6, 7 ]
console.log(numts.sliceWithStep(arr, 1, 5, 2)); // Output: [ 2, 4, 6 ]
console.log(numts.selectEvery(arr)); // Output: [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(numts.selectEvery(arr, 3)); // Output: [ 1, 4, 7 ]

const arr2d = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];
console.log(numts.sliceFromArray(arr2d[1], 1, 4)); // Output: [ 7, 8, 9 ]
```
