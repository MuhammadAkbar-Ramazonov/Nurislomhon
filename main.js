

var elFirstNum = prompt("birinchi son kirgaz");
var elsecondNum = prompt("ikkinchi son kirgaz");
var elthirdNum = prompt("uchinchi son kirgaz");




var elFirstNumvalue = Number(elFirstNum);
var elsecondNumvalue = Number(elsecondNum);
var elthirdNumvalue = Number(elthirdNum);
var step = 0;

if (elFirstNumvalue > 0){
  step += 1;
}if (elsecondNumvalue > 0){
  step += 1;
}if (elthirdNumvalue > 0){
  step += 1;
}
console.log(step);