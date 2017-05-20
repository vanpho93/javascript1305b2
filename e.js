// const khoa = { name: 'KhoaPham', age: 30 };

// console.log(khoa.age);

function Person(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = function(){ 
        console.log(this.name + ' Xin chao'); 
    }
}

// const pho = new Person('PHOO');
// const phat = new Person('PHAT ');
// // console.log(pho, phat);

// pho.sayHello();

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         console.log(this.name + ' xin chao!');
//     }
// }

const pho = new Person('PHOO', 19);
const { name, age, sayHello } = pho;
// const name = pho.name
// const age = pho.age;
// const { age } = pho;

pho.sayHello();

console.log(name, age);
