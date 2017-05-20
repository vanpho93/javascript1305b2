const arr = [2, 5, 3, 7, 8, 2];

console.log(arr.map(e => e * e));

// arr.forEach((e, i) => console.log(`AAA ${e} ${i}`));
// let i = 0;
// const isBiggerThan9 = arr.every(function(e) {
//     console.log(++i);
//     return e > 2
// })
// console.log(isBiggerThan9);

console.log(arr.indexOf(7));

// const index = arr.find(function(e) {
//     return e > 5 && e % 2 === 1
// });

// console.log(index);

const arrResult = arr.filter(function(e) {
    return e % 2 === 1
});

console.log(arrResult);