var doSomething = prompt("what would you like to do?");
var trimmedDoSomething = doSomething.trim();
console.log(trimmedDoSomething);

if (trimmedDoSomething == "") {
    alert("please type something");

} else {
    alert(trimmedDoSomething);
}


var firstNumber = prompt("pick a number");
var secondNumber = prompt("pick a number");
var mathThing = prompt("divide or multiply?");
console.log(isNaN(firstNumber));
console.log(isNaN(secondNumber));
console.log(isNaN(mathThing));
var a = parseInt(firstNumber);
var b = parseInt(secondNumber);
if ((mathThing) == "multiply") {
    var ans = a * b;
} else if ((mathThing) == "divide") {
    var ans = a / b;
}
console.log(isNaN(ans));
alert(ans);
if (isNaN(ans)) {
    alert("numbers please");
}
var myString = ("red, yellow, orange, green");
console.log(myString.slice(13, 19));

console.log(Math.ceil(4.5));
var theDate = new Date();
console.log(theDate.getFullYear());
function helloWorld(num){
   console.log("hello world")
}


var name = "kaegan";
name = capitalize(name);

function capitalize(str){
  return str[0].toUpperCase() + str.slice(1);
}

console.log(name);
