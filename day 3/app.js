 var firstname=prompt("what is your first name?");
 var lastname=prompt("what is your lastname?");
 console.log (firstname);
 alert("you picked the "+lastname+" family.");
 confirm("is this correct?");
 var a = 5;

 for(var i = 0; i <5; i++){
   a++;
   console.log(a)
 }
 console.log("5" !== 5)
 var isItANumber = parseInt("9920834809452387965403");
 console.log( typeof isItANumber)
 var firstNumber = prompt("pick a number");
 var secondNumber = prompt("pick a number");
 console.log( isNaN(firstNumber) );
 console.log( isNaN(secondNumber) );
 var a = parseInt(firstNumber)
 var b = parseInt(secondNumber)
 var ans = a + b;
 console.log( isNaN(ans) );
 alert(ans)
 if ( isNaN(ans) ){
   alert("this is a number adding site, not a word maker.")
 }
 var age=prompt("what is your age?")
 if ( (age)<18 ) {
   alert("get off of here, child!")
 } else if ( (age)>18 ) and ( (age)<120 ){
    alert("Welcome!")
  } else if ( (age)>120 ){
    alert("sorry, but im afraid only the living are aloud to play. We hold the right to refuse service to anyone.")
 } else if ( isNaN(age) ){
    alert("age "+age+" is not possible. please enter a number.")
    var age=prompt("what is your age?")
  }
/*  }if ( (age)>18){
    alert("Welcome!")
  }else if ( (age)<18 ) {
    alert("get off of here, child!")
  }else if ( isNaN(age) ){
     alert("age "+age+" is not possible. please enter a number.")
     var age=prompt("what is your age?")
   }if ( (age)>18){
     alert("Welcome!")
   }else if ( (age)<18 ) {
     alert("get off of here, child!")
   }else if ( isNaN(age) ){
      alert("age "+age+" is not possible. please enter a number.")
      var age=prompt("what is your age?")
    }if ( (age)>18){
      alert("Welcome!")
    }else if ( (age)<18 ) {
      alert("get off of here, child!")
    }else if ( isNaN(age) ){
       alert("age "+age+" is not possible. please enter a number.")
       var age=prompt("what is your age?")
     }if ( (age)>18){
       alert("Welcome!")
     }else if ( (age)<18 ) {
       alert("get off of here, child!")
     }else if ( isNaN(age) ){
        alert("age "+age+" is not possible. please enter a number.")
        var age=prompt("what is your age?")
      }if ( (age)>18){
        alert("Welcome!")
      }else if ( (age)<18 ) {
        alert("get off of here, child!")
      }else if ( isNaN(age) ){
         alert("age "+age+" is not possible. please enter a number.")
         var age=prompt("what is your age?")
       }if ( (age)>18){
         alert("Welcome!")
       }else if ( (age)<18 ) {
         alert("get off of here, child!")
       }else if ( isNaN(age) ){
          alert("age "+age+" is not possible. please enter a number.")
          var age=prompt("what is your age?")
        }if ( (age)>18){
          alert("Welcome!")
        }else if ( (age)<18 ) {
          alert("get off of here, child!")
        }else if ( isNaN(age) ){
           alert("age "+age+" is not possible. please enter a number.")
           var age=prompt("what is your age?")
         }if ( (age)>18){
           alert("Welcome!")
         }else if ( (age)<18 ) {
           alert("get off of here, child!")
         }else if ( isNaN(age) ){
            alert("age "+age+" is not possible. please enter a number.")
            var age=prompt("what is your age?")
          }if ( (age)>18){
            alert("Welcome!")
          }else if ( (age)<18 ) {
            alert("get off of here, child!")
          }else if ( isNaN(age) ){
             alert("are you that stupid? do you have no conception of the difference between a letter and a number? get out!")
          } */
     var gender = prompt("what is your gender? (M or F)")
      if ( (gender)=M ){
        alert("welcome,"+firstname+", male child of the"+lastname+"family"  )
      }
      else if ( (gender)=F ){
        alert("welcome,"+firstname+", female child of the"+lastname+"family"  )
      }
      var color = 'green'
      switch(color){
        case 'red':
        console.log('a '+color+' apple');
        break;
        case 'green':
        console.log('lush '+color+' grass');
        break;
        default:
        console.log("nothing's left");
        break;
  }
