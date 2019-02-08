//colorsArray 배열

var colorsArray = ['orange','yellow','green'];

for (var i = 0; i < colorsArray.length; ++i){
    console.log(colorsArray[i]);
}


//colorsObj 객체
var colorObj = {
    '0' : 'orange',
    '1' : 'yellow',
    '2' : 'green'
};

for (var i = 0; i < colorsArray.length; ++i){
    console.log(colorObj[i]);
}

//typeof 연산자 비교
console.log(typeof colorsArray);
console.log(typeof colorObj);

//length 프로퍼티
console.log(colorsArray.length);
console.log(colorObj.length);

//배열 표준 메서드
colorsArray.push('red');
//colorObj.push('red');



//배열의 프로토 타입과 객체의 프로토타입 비교
var emptyArray = [];
var emptyObj = {};

console.dir(emptyArray);
console.dir(emptyObj);