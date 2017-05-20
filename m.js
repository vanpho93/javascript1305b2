// let myBalance = balance;
// this.getBalance = function() {
//     return myBalance;
// }
// this.setBalance = function(newBalance) {
//     myBalance = newBalance;
// }

class Person {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
        
    }

    get balance() {
        return 1000
    }

    set balance(value) {
        this.balance = value
    }
}

const pho = new Person('Pho', 18, 1000);
// pho.myBalance;
// pho.setBalance(100000);
// console.log(pho.getBalance());
pho.balance = 20
console.log(pho.balance)
