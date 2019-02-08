var quarter1 = 1200;
var quarter2 = 1300;
var quarter3 = 1000;
var quarter4 = prompt("4분기의 실적은 ?" , "0");

var result = (quarter1 + quarter2 + quarter3) / 3;
var answer;

if(result > quarter4){
    answer = result - quarter4;
    document.write( "이번 분기는 "+answer+"만큼 평균 미달입니다.")
}
else {
    answer =  quarter4 -result;
    document.write( "이번 분기는 "+answer+"만큼 평균 초과입니다.")
}