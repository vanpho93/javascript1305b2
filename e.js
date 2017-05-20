const khoa = { name: 'KhoaPham', age: 30 };

console.log(khoa.age);

function Person(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = () => console.log(this.name + ' Xin chao')
}

const pho = new Person('PHOO');
const phat = new Person('PHAT ');
// console.log(pho, phat);

pho.sayHello();
