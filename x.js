class Person {
    constructor(name, height, age) {
        this.name = name;
        this.height = height;
        this.age = age;
    }
}

const teo = new Person('Teo', 100, 18);
const ti = new Person('Ti', 170, 10);
const tun = new Person('Tun', 180, 3);

const arrPerson = [teo, ti, tun];

console.log(arrPerson.sort(function(a, b){
    return a.height - b.height;
}));

// const p = arrPerson.find(e => e.age > 15);
// console.log(p)
