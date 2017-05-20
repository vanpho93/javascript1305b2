function Person(name, age, balance) {
    this.name = name;
    this.age = age;
    let myBalance = balance;
    this.getBalance = function() {
        return myBalance;
    }
    this.setBalance = function(newBalance) {
        myBalance = newBalance;
    }
}

const pho = new Person('Pho', 18, 1000);

// pho.myBalance;

pho.setBalance(100000);
console.log(pho.getBalance());
