var foo = "I'm foo";

console.log(foo);
console.log(window.foo);


var test = 'This is test';
console.log(window.test);

//sayFoo()
var sayFoo = function () {
    console.log(this.test);
};

sayFoo();