// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
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

var lowercaseCondition=false, uppercaseCondition=false, numberCondition=false, specialcharacterCondition=false; //var variables now because I had issues with while statement
//while statement is to gather input from end user
while(lowercaseCondition==false&&uppercaseCondition==false&&numberCondition==false&&specialcharacterCondition==false) {
  lowercaseCondition = confirm("Will you require a lowercase character in your password? (Okay for yes, Cancel for no)");
  uppercaseCondition = confirm("Will you require an uppercase character in your password? (Okay for yes, Cancel for no)");
  numberCondition  = confirm("Will you require a number in your password? (Okay for yes, Cancel for no)");
  specialcharacterCondition = confirm("Will you require a special character in your password? (Okay for yes, Cancel for no)");
  //This if is to validate the choices made by the end user
  if(lowercaseCondition==false&&uppercaseCondition==false&&numberCondition==false&&specialcharacterCondition==false){ 
    alert("You must pick one criteria for your password!!!");  //This is here to alert the user of the criteria and enforce at least one item is picked
  }
}

var passwordtogenerate="";  //establishing the variable.  Instead of testing later I'll wrap in a while statement
var lowerletters = "abcdefghijklmnopqrstuvwxyz";  //I'll randomize characters in
var upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //I'll randomize characters in
var numerical = "1234567890"; //I'll randomize numbers in
var specialcharacters = "/.,';][)(!@#$%^&*"; //I'll randomize specials in
var allcharacters = lowerletters + upperletters + numerical + specialcharacters;

//var length = 100; //forcing 100 character password length during dev

for(var i=0; i <= length; i++){ //for each in length
  var randomizednumber = Math.floor(Math.random(lowerletters.length) * lowerletters.length); //Gets a random number based on total character length
  passwordtogenerate += lowerletters.substring(randomizednumber,randomizednumber+1); //grab a random character from the list
}

var characterarray = []; //make an array, this is just a hackfix I decided to use to get 4 characters that are unique
while(characterarray.length < 4) { //need 4 characters, so end the while when it hits 4
  var char = Math.floor(Math.random() * length) + 1; //Random does decimals, so I need to shift by 1 as there is no zero position for character indexes (next line)
  if(characterarray.indexOf(char)=== -1) characterarray.push(char); //grab the character index and push that into an array
}//creates 4 unique numbers based on the total length of the desired password

//I had some difficulty understanding the best practice here, so I made a function to replace a specific string index by splicing
if(lowercaseCondition==true) { //I'm still doing this in case the upperletters string changes or is reduced to only a few letters
  var randomcharacter = Math.floor(Math.random() * lowerletters.length);
  passwordtogenerate = replaceCharacterAtIndex(passwordtogenerate, characterarray[0], lowerletters.charAt(randomcharacter));
}
if(uppercaseCondition==true) {
  var randomcharacter = Math.floor(Math.random() * upperletters.length);
  passwordtogenerate = replaceCharacterAtIndex(passwordtogenerate, characterarray[1], upperletters.charAt(randomcharacter));
}
if(numberCondition==true) {
  var randomcharacter = Math.floor(Math.random() * numerical.length);
  passwordtogenerate = replaceCharacterAtIndex(passwordtogenerate, characterarray[2], numerical.charAt(randomcharacter));
}
if(specialcharacterCondition==true) {
  var randomcharacter = Math.floor(Math.random() * specialcharacters.length);
  passwordtogenerate = replaceCharacterAtIndex(passwordtogenerate, characterarray[3], specialcharacters.charAt(randomcharacter));
}
  return passwordtogenerate;
}

function replaceCharacterAtIndex(stringToUpdate, index, newCharacter) {
  //I store in a variable the first part of the string up to the index, the new character(s), 
  //and the rest of the string skipping the index number of the length.  This allows for multiple characters
  var finalString = stringToUpdate.slice(0,index) + newCharacter + stringToUpdate.slice(index + newCharacter.length);
  return finalString;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
