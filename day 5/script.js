function giveItToMe(){
var doSomething = prompt("what would you like to do?");
var trimmedDoSomething = doSomething.trim();
console.log(trimmedDoSomething);
console.log(typeof(trimmedDoSomething));
if( !trimmedDoSomething ){
  alert('type you fool! type!');
  giveItToMe();
}else{
  alert(trimmedDoSomething);
  console.log(trimmedDoSomething);
}
}

var fruits = ['cherry', 'orange', 'pomegranate', 'grapefruit', 'watermelon'];
fruits.push('apple');
console.log(fruits);

var fruitColors = [];
var cherry = ['cherry', 'red'];
var pear = ['pear', 'green'];
var banana = ['banana', 'yellow'];
fruitColors.push(cherry);
fruitColors.push(pear);
fruitColors.push(banana);
console.log(fruitColors[0][1]);
var newFruit = prompt('enter a fruit');
var newColor = prompt('enter a color');
console.log(newFruit, newColor);
fruitColors.push(newFruit, newColor);
console.log(fruitColors);

function squareRooter(){
var number = prompt('pick a number');
var a = parseInt(number);
console.log(isNaN(number));
if (isNaN(number)){
  alert('NaN');
  squareRooter();
}else{
  var ans = (number * number);
  alert(ans);
}
}

squareRooter();

var name = prompt("enter name");
name = capitalize(name);

function capitalize(name){
  return name[0].toUpperCase() + name.slice(1);
  console.log(name);
}
capitalize(name);
console.log(name);

function average(){
  var one = prompt('pick a number');
  var two = prompt('pick a number');
  var three = prompt('pick a number');
  var four = prompt('pick a number');
  console.log(one, two, three, four);
if (isNaN(one, two, three, four)){
alert('isNaN');
average();}
else if (!isNaN(one, two, three, four)){
  var begin = (parseInt(one) + parseInt(two) + parseInt(three) + parseInt(four));
  var average = (begin / 4);
  console.log(average);
}
}

average();
