//날짜 객체 받아오기
var today = new Date();
var nowMonth = today.getMonth();
nowDate = today.getDate();
nowDay = today.getDay();

document.write("<h1>오늘 날짜 정보</h1>");
document.write("현재 월 :" + nowMonth,"<br>");
document.write("현재 일 :" + nowDate,"<br>");
document.write("현재 요월 :" + nowDay,"<br>");

var worldcup = new Date(2002,5,31);
var theMonth = worldcup.getMonth();
theDate = worldcup.getDate();
theDay = worldcup.getDay();


document.write("<h1>월드컵 날짜 정보</h1>");
document.write("2002월드컵 몇 월 : " +theMonth,"<br>");
document.write("2002월드컵 몇 일 : " +theDate,"<br>");
document.write("2002월드컵 무슨 요일 : " +theDay,"<br>");