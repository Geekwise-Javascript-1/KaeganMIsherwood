var num = 1;
while(num < 11){
  console.log(num);
  num++;
}
//-------------------------------------------------
var num1 = 1;
do{
  console.log(num1);
  num1++;
} while (num1 < 11);
//----------------------------------------------
for(var /*sets conditions*/ i = 0; i < 10; i ++ ){
  console.log(i + 1);
}
//---------------------------------------------
var num = 0;

while (num < 10){
  if(num === 5 || num === 7){
    num++;
    continue;
  }
  console.log(num);
  num++;
}
//----------------------------------------------
for(var i = 0; i < 10; i++){
  console.log(i);
  if(i === 6){
    break;
  }
}
//----------------------------------------------
var fruits = ['apples', 'oranges', 'grapes', 'bannanas', 'cherries'];
console.log(fruits[3]);
for (var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}
