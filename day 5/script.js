var doSomething = prompt("what would you like to do?");
var trimmedDoSomething = doSomething.trim();
console.log(trimmedDoSomething);

//if (trimmedDoSomething == "") {
    //alert("please type something");}
    for (trimmedDoSomething = "") { 
      alert("please type something");
      var doSomething = prompt("what would you like to do?");
      var trimmedDoSomething = doSomething.trim();
      console.log(trimmedDoSomething);
    }
} else {
    alert(trimmedDoSomething);
}
