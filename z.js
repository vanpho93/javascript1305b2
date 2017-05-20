class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('XIN CHAO');
    }
}

Person.prototype.sayHello = function() {
    console.log('Bye bye! ' + this.name);
}

const pho = new Person('PHO', 18);
pho.sayHello()

Person.sayGoodbye = function() {
    console.log('BYE!!!');
}


