// Assignment code here
var passwordLength = window.prompt("Please enter the amout of characters you want to generate for the password (at least 8 and no more than 128 characters)");
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890'
var password = '';

var generatePassword = function (event) {
if(passwordLength >= 8 && passwordLength <=128){
  for(let i=0; i<passwordLength; i++) {
      password = password + characters.charAt(Math.floor(Math.random()*characters.length));
  }
  console.log (password);
  return password;
 }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);