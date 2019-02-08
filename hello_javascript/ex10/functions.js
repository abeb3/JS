//add() 함수 선언문
function add(x,y) {
    return x + y;
}

console.log(add(3,4));

//add() 함수 표현식 (잘 사용 안함)

var addVar = function (x,y) {
    return x + y;
}

var plus = addVar;

console.log(plus(7,1));

var factorialVar = function factorial(n) {
    if(n <= 1){
        return 1;
    }
    return n * factorial(n -1);
};

console.log(factorialVar(3));

//함수도 객체
function add23(x,y) {
    return x + y;
}

add23.result = add23(3,2);
add23.status = 'ok';

console.log(add23.result);
console.log(add23.status);