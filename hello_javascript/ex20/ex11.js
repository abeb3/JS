var myObject = {
    name : 'foo',
    sayName : function () {
        console.log(this.name);
    }
};

var otherObject = {
    name: 'bar'
};

//이곳에서 sayName이라는 function이 binding 되는것이다.
otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();
