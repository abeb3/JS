var price1 = 1000;
var price2 = 6000;
var price3 = 1000;

var changeMoney;
var result = 10000 <= (price1 + price2 + price3);

if(result){
    changeMoney = (price1 + price2 + price3) - 10000;
}
else {
    changeMoney = 10000 - (price1 + price2 + price3);
}

result = result ? changeMoney + "원이 초과 되었습니다" : changeMoney + "원이 아직 남았습니다.";

document.write(result);