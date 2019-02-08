// var bodyWeight;
// var height = 171;
// bodyWeight = (height - 100) * 0.9;
//
//
// console.log(bodyWeight);


var name = prompt("당신의 이름은?", "");
var height = prompt("당신의 신장은? :" ,"0");
var weight = prompt("당신의 몸무게는?","0");

var nomal_w = (height - 100) * 0.9;

var result = weight>= nomal_w - 5 && weight <= nomal_w +5;

result = result ? "적정 체중입니다." : "적정체중이 아닙니다.";
// console.log(name + "님은 " + result);

document.write(name + "님은" + result);