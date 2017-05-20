class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('XIN CHAO');
    }
}

class Child extends Person{
    constructor(name, age, hobby) {
        super(name, age);
        this.hobby = hobby;
    }
    sayHello() {
        console.log('CHAO, TOI THICH CHOI ' + this.hobby);
    }
}

const a = new Child('AAA', 18, 'Auto');
a.sayHello();
console.log(a.hobby);
