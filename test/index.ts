import { Numts } from "../src";
const numts = new Numts();
const r = numts.array([2, 3, 4]);
console.log(r);
console.log((r[1] = 5));
console.log(r);
const full = numts.full([3, 3], 5);
console.log(full);
const ones = numts.ones([3, 3]);
console.log(ones);
const zero = numts.zeros([3, 3]);
console.log(zero);
const identity = numts.eyes(5);
console.log(identity);
const random = numts.random([3, 3]);
console.log(random);
const max_value = 4;
const min_value = 1;
const clip_a = [1, 22, 99, 0, 6, 8, -2, 3, 4, 3, 1];
console.log(numts.clip(clip_a, min_value, max_value));
const where = [2, 3, 4, 5, 1, 2, 12];
const wherea = numts.where(where, (value) => value % 2 === 0);
console.log(wherea);
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numts.percentile(a, 50));
const b = [5, 1, 3, 7, 9, 20];
console.log(numts.percentile(b, 25));
const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(numts.sliceToEnd(arr, 4));
console.log(numts.sliceArrayRange(arr, 1, 7));
console.log(numts.sliceIndex(arr, 4));
console.log(numts.sliceEndToEnd(arr, 3, 1));
console.log(numts.sliceWithStep(arr, 1, 5, 2));
console.log(numts.selectEvery(arr));
console.log(numts.selectEvery(arr, 3));
const arr2d: number[][] = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];
console.log(numts.sliceFromArray(arr2d[1], 1, 4));
