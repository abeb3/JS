var foo = new Array(3);
console.log(foo);
console.log(foo.length);

var bar = new Array(1,2,3);
console.log(bar);
console.log(bar.length);

//유사 배열 객체의 배열 메서드 호출

var arr = ['bar'];
var obj = {
    name: 'foo',
    length : 1
};

arr.push('baz');
console.log(arr);

//obj.push('baz');

var obj2 ={name : 'foo', length: 1};

Array.prototype.push.apply(obj2,['baz']);
console.log(obj2);