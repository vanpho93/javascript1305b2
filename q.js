/*
[1, 4, 6, 4, 5, 7, 9]

    function filter(arr, checkFunction) {
        return arr2
    }


*/

function filter(arr, checkFunction) {
    const arrResult = [];
    for(let i = 0; i < arr.length; i++) {
        if (checkFunction(arr[i])) arrResult.push(arr[i]);
    }
    return arrResult;
}

const arrNum = [1, 4, 6, 4, 5, 7, 9];

function checkOdd(a) {
    return a % 2 === 1
}

const arrR = filter(arrNum, a => a % 2 === 1)

console.log(arrR);
