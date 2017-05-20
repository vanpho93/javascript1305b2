const arr = [1, 2, 10];
const arr2 = [1, 2, 10];
// arr[2] = 5;
const arr3 = arr;
arr3[2] = 15;
console.log(arr === arr2);
console.log(arr);

const a = 5;
const b = 5;

console.log(a === b);
