var colorArr = ['orange','yellow','blue','green','red'];

console.log(colorArr[0]);
console.log(colorArr[1]);
console.log(colorArr[2]);

var arr = [];
console.log(arr.length);


arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[100] = 100;

console.log(arr.length);

//arr의 length는 101이다.

//배열 length 프로퍼티의 명시적 변경

var arr = [0,1,2];
console.log(arr.length);        //출력값 3

arr.length = 5;
console.log(arr.length); //출력값 [0,1,2,undefined * 2]

arr.length = 2;
console.log(arr);       //출력값 [0,1]
console.log(arr[2]);    //출력값 undefined

//----배열 표준 메서드와 length 프로퍼티

//arr 배열 생성
var arr2 = ['zero', 'one' , 'two'];

//push() 메서드 호출
arr2.push('three');
console.log(arr2);   //출력값 ['zero', 'one' , 'two','three']

arr2.push('four');
console.log(arr2);

arr2.length = 6;
console.log(arr2);