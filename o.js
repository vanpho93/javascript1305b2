function logA() {
    return console.log;
}

function logB() {
    console.log('BBB');
}

// console.log(add(1, 3))

function myLog(f1, f2, isLogA) {
    if(isLogA) {
        f1('ajshdbaj');
    } else {
        f2();
    }
}

myLog(logA(), logB, true);
