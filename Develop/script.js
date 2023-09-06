// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("writePassword called");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = 0; //Set to zero so cancel button works in while statement
  //while statement is input validation
  while(length == ""||Number(length)<8||Number(length)>128||isNaN(parseInt(length))){
    length = prompt("Enter numeric length of password (8-128 characters)","8");
    if(length===null) {
      return;
    }
  }

var lowercase=false, uppercase=false, number=false, specialcharacter=false; //var variables now because I had issues with while statement
//while statement is to gather input from end user
while(lowercase==false&&uppercase==false&&number==false&&number==false&&specialcharacter==false) {
  lowercase = confirm("Will you require a lowercase character in your password? (Okay for yes, Cancel for no)");
  uppercase = confirm("Will you require an uppercase character in your password? (Okay for yes, Cancel for no)");
  number  = confirm("Will you require a number in your password? (Okay for yes, Cancel for no)");
  specialcharacter = confirm("Will you require a special character in your password? (Okay for yes, Cancel for no)");
  //This if is to validate the choices made by the end user
  if(lowercase==false&&uppercase==false&&number==false&&number==false&&specialcharacter==false){ 
    alert("You must pick one criteria for your password!!!");  //This is here to alert the user of the criteria and enforce at least one item is picked
  }
}

var passwordtogenerate="";  //establishing the variable.  Instead of testing later I'll wrap in a while statement
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";  //I'll randomize characters in
var numerical = "1234567890"; //I'll randomize numbers in
var special = "/.,';][)(!@#$%^&*"; //I'll randomize specials in
var allcharacters = alpha + numerical + special;

//generate the password
 var conditionsMet=false;

while(conditionsMet==false) { //validation of testing below
  console.log("loop");
  var lowerconstraint=false, upperconstraint=false, numberconstraint=false, specialconstraint=false; //create constraints
  //resets on loop as new password is generated
  for(var i=0; i <= length; i++){ //for each in length
    var randomizednumber = Math.floor(Math.random(allcharacters.length) * allcharacters.length); //Gets a random number based on total character length
    passwordtogenerate += allcharacters.substring(randomizednumber,randomizednumber+1); //grab a random character
  }
  //validation if's
  
  if(lowercase==true) {
    for(var o=0; o<passwordtogenerate.length; o++){
      if(passwordtogenerate.substring(o,o+1)==passwordtogenerate.substring(o,o+1).toLowerCase()) {
        console.log(passwordtogenerate.substring(o,o+1));
        lowerconstraint=true;
      }
    }
  } else {
    lowerconstraint=true;  //we've technically passed the false requirement by default
  }

  if(uppercase==true) {
    for(var o=0; o<passwordtogenerate.length; o++){
      console.log(passwordtogenerate.substring(o,o+1));
      if(passwordtogenerate.substring(o,o+1).match(/^[A-Z]*$/)) {
        console.log("uppercase found " +  passwordtogenerate.substring(o,o+1))
        upperconstraint=true;
      }
    }
  } else {
    upperconstraint=true;  //we've technically passed the false requirement by default
  }

  if(number==true) {
    for(var o=0; o<passwordtogenerate.length; o++){
      if(typeof passwordtogenerate.substring(o,o+1) == number) {
        numberconstraint=true;
      }
    }
  } else {
    numberconstraint=true;  //we've technically passed the false requirement by default
  }

  if(specialcharacter==true) {
    for(var o=0; o<passwordtogenerate.length; o++){
      for(var s=0; s<special.length; s++) {
      if(passwordtogenerate.substring(o,o+1) == special.substring(s,s+1)) {
        specialconstraint=true;
      }
    }
  }
} else {
  specialconstraint=true;  //we've technically passed the false requirement by default
}
console.log(lowerconstraint);
console.log(upperconstraint);
console.log(numberconstraint);
console.log(specialconstraint);
if(lowerconstraint==true&&upperconstraint==true&&numberconstraint==true&&specialconstraint==true) {
  conditionsMet=true;
  console.log(conditionsMet);
}
}

if(lowerconstraint==true && upperconstraint==true && numberconstraint==true && specialconstraint==true) {
  return passwordtogenerate;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
