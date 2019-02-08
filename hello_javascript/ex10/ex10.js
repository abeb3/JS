function sum() {
    var result = 0;

    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];

    }

    return result;
}


console.log(sum(1,2,3));

console.log(sum(1,2,3,4,5,6,7));

//arguments 객체는 전달된 인자의 개수에 따라 서로 다른 처리를 해줘야 될경우 사용하면 된다.