const that = this;

const pho = {
    name: 'PHO',
    age: 18,
    that2: this,
    sayHello: function(){
        console.log(this.name + ' chao ban!');
    }
}

pho.sayHello.bind(pho)();