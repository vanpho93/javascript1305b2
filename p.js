function a() {
    return 10;
}

const b = a;

// console.log(b);
//Closure

function add(x) {
    return function(y) {
        return x + y;
    }
}

const addWith10 = add(10);
const addWith3 = add(3);
console.log(addWith10(5));
console.log(addWith3(5));

function checkAnArray(arr, checkFunction) {
    for (let i = 0; i < arr.length; i++) {
        if (checkFunction(arr[i])) {
            return true;
        }
    }
    return false;
}

const arrrr = [3, 5, 6, 100, 4];

function isBiggerThan30(num) {
    return num > 30;
}

const kq = checkAnArray(arrrr, isBiggerThan30);
console.log(kq);
