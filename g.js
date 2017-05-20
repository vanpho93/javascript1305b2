function Person(ten, tuoi, vo) {
    this.name = ten;
    this.age = tuoi;
    this.wife = vo;
    this.sayHello = () => console.log(this.name + ' Xin chao, vo toi la: ' + this.wife)
}

const gai = new Person('Gai', 18);
const trai = new Person('Trai', 20, gai);

// console.log(trai.wife);
// trai.sayHello();
gai.sayHello();
