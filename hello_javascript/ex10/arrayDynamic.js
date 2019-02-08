//배열 생성
var arr = ['zero','one','two'];
console.log(arr.length);    //출력값 3

//프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);    //출력값 3

//배열 원소 추가
arr[3] = 'red';
console.log(arr.length) //출력값 4

//배열객체 출력
console.log(arr);

//배열의 프로퍼티 열거

//color와 name 프로퍼티도 출력됨
for(var prop in  arr){
    console.log(prop, arr[prop]);
}

//배열의 요소만 출력됨
for(var  i = 0; i<arr.length; i++){
    console.log(i, arr[i]);
}

//delete문도 사용가능
//delete.arr[2]; 이런식으로 사용가능

var arr2 = ['zero', 'one' , 'two', 'three'];
arr2.splice(2,1);
console.log(arr2);
console.log(arr2.length);