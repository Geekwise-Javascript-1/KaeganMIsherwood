var getNum = parseInt(prompt('number pls'));

function pwrTwo(num1){
  if(!num1){
  return NaN;
  alert('NaN');
}else{
  return num1 * num1;
  alert(num1);
}
}
alert(pwrTwo(getNum));
var getStr = prompt('type a sentence');
var res = capPeriodString(getStr);

function capPeriodString(str){
  var upped = str.charAt(0).toUpperCase() + str.slice(1);
  var lastChar = upped.length - 1;
  console.log(upped[lastChar]);
  if(lastChar !== '.'){
    return upped + '.';
  }
  return upped;
}
alert(res);


var getStr = prompt('type something');
var flipped = flipThatStr(getStr);
function flipThatStr(str){
  if(!str){
    return '';
  }else if(str.length % 2 !== 0){
    var calc = Math.ceil(str.length / 2);
    console.log(calc);
  }else{

  var firstHalf = str.substring(0, str.length/2);
  var secondHalf = str.substring(str.length/2);
  //console.log(firstHalf);
  return secondHalf + firstHalf;
}
}

alert(flipped);
