var greenArr = ["교대","방배","강남"];
var yellowArr = ["미금","정자","수서"];

//두번째 index부터 1개의 데이터를 삭제하고 뒤에 나오는 문자열들을 삽입합니다.
greenArr.splice(2,1,"서초","역삼");
console.log(greenArr);

var data1 = yellowArr.pop();    //가장 마지막 데이터를 data1에 대입한다.
var data2 = yellowArr.shift();  //첫번째 index 값을 data2에 대입한다,

console.log(data1);
console.log(data2);
