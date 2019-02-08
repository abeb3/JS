var arr_1 = ["사당", "교대","방배","강남"];
var arr_2 = ["신사","압구정","옥수"];

//배열내 값들을 해당하는 값으로 연결해서 출력
var result = arr_1.join("+");
console.log(result);


//두 배열의 값을 합쳐서 출력
result = arr_1.concat(arr_2);
console.log(result);


//두 숫자 사이의 index 값들을 제거한다.
result = arr_1.slice(1,3);
console.log(result);