var btn = document.getElementById('btn');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input1 = document.getElementById('input3');
var input2 = document.getElementById('input4');
var input1 = document.getElementById('input5');
var span = document.getElementById('span');

//console.log(btn);
btn.onClick = handleGoBtnClick();


function handleGoBtnClick(){
var userInput = input1.value;
input1.value = "hello!");
span.innerHTML = input2.value;
updateOutput(input2.value);
alert(input1.value);
}
