// const khoa = { name: 'KhoaPham', age: 30 };

// console.log(khoa.age);

// function Person(ten, tuoi) {
//     this.name = ten;
//     this.age = tuoi;
//     this.sayHello = () => console.log(this.name + ' Xin chao')
// }

// const pho = new Person('PHOO');
// const phat = new Person('PHAT ');
// // console.log(pho, phat);

// pho.sayHello();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(this.name + ' xin chao!');
    }

    get balance() {
        return 100
    }
}

const pho = new Person('PHOO');
console.log(pho);
pho.sayHello();
