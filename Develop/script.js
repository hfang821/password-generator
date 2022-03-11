// Assignment code here
var passwordLength = window.prompt("Please enter the amount of characters you want to generate for the password (at least 8 and no more than 128 characters)");
var lowerUpperCase = window.prompt ("Do you want to include lowercase or uppercase in your password or both? Enter L for lowercase, U for uppercase, B for both");
var specialChar = window.confirm ("Do you want to include special characters for your password?");
var numChar = window.confirm ("Do you want to have numeric characters in your password?");

var charactersCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var characters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '01234567890';
var charactersSpecial = '~!@#$%^&*()-=_+~`{}|:"<>?[],./';

var passwords = '';
var newChar = '';


var passwordHandler = function(newChar) {
  for(let i=0; i<passwordLength; i++) {
    passwords = passwords + newChar.charAt(Math.floor(Math.random()*newChar.length));
}  
  console.log(passwords);
  return passwords;
};

var generatePassword = function () {
  if(passwordLength >= 8 && passwordLength <=128){

    //Section 1: if user picked special characters
    if (specialChar == true) { 
      //if user picked numbers
      if (numChar == true) { 
         //if user picked lowercase, uppercase or both included
         if(lowerUpperCase === 'L' || lowerUpperCase === 'l') {
           newChar = characters + charactersSpecial + numbers;
         } else if (lowerUpperCase === 'U' || lowerUpperCase === 'u') {
           newChar = charactersCap + charactersSpecial + numbers ;
         } else if (lowerUpperCase === 'B' || lowerUpperCase === 'b') {
           newChar = charactersCap + characters + charactersSpecial + numbers;
         } else {
           window.alert ('You need to enter a valid answer! Please choose L (Lowercase), U (Uppercase) or B (Both)');
           return;
         }
        //if user does not pick numbers, but picked special characters
       } else {
        if(lowerUpperCase === 'L' || lowerUpperCase === 'l') {
          newChar = characters + charactersSpecial;
        } else if (lowerUpperCase === 'U' || lowerUpperCase === 'u') {
          newChar = charactersCap + charactersSpecial ;
        } else if (lowerUpperCase === 'B' || lowerUpperCase === 'b') {
          newChar = charactersCap + characters + charactersSpecial;
        } else {
          window.alert ('You need to enter a valid answer! Please choose L (Lowercase), U (Uppercase) or B (Both)');  
          return;
        }
      } 
    }  

    //Section 2: if user does not pick special characters
    else if (specialChar == false) {
      //if user picks numbers
      if(numChar = true) {
        if(lowerUpperCase === 'L' || lowerUpperCase === 'l') {
          newChar = characters + numbers;
        } else if (lowerUpperCase === 'U' || lowerUpperCase === 'u') {
          newChar = charactersCap + numbers ;
        } else if (lowerUpperCase === 'B' || lowerUpperCase === 'b') {
          newChar = charactersCap + characters + numbers;
        } else {
          window.alert ('You need to enter a valid answer! Please choose L (Lowercase), U (Uppercase) or B (Both)'); 
          return;
        }
      } 
      // if user does not pick numbers
      else {
        if(lowerUpperCase === 'L' || lowerUpperCase === 'l') {
          newChar = characters;
        } else if (lowerUpperCase === 'U' || lowerUpperCase === 'u') {
          newChar = charactersCap ;
        } else if (lowerUpperCase === 'B' || lowerUpperCase === 'b') {
          newChar = charactersCap + characters;
        } else {
          window.alert ('You need to enter a valid answer! Please choose L (Lowercase), U (Uppercase) or B (Both)'); 
          return;
        }
      }      
    }
 
    return passwordHandler(newChar);
  } 
   // if user does not enter a valid number between 8 and 128.
  else {
    window.alert("Please enter a password length at least 8 but less than 128.")
  }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);