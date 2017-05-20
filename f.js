function Account(name, balance) {
    this.name = name;
    this.balance = balance;
    this.withdraw = function(amount) {
        //TODO
        this.balance = this.balance - amount;
    }
}

const myAccount = new Account('Pho', 1000);
myAccount.withdraw(100)
console.log(myAccount);
