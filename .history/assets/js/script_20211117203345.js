 // Assignment Code
var generateBtn = document.querySelector("#generate");
console.log (generateBtn);
function generatePassword(){
  var passwordLength = prompt("How long do you want your password to be? Please enter a number between 8 and 128.");
  var passwordSpecialCharacter = confirm ("Do you want any special characters in your password?");
  var passwordUpperCase = confirm ("Do you want an upper case letters in your password?");
  var passwordLowerCase = confirm ("Do you want any lower case letters in your password?");
  var passwordNumbers = confirm ("Do you want any numbers in your password?");
console.log(passwordLength, passwordSpecialCharacter,passwordUpperCase,passwordLowerCase, passwordNumbers);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function makeid(length) {
//   var result           = '';
//   var characters       = 'ABCDEFGHIJKLMNOPQRSTU VWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//     result += characters.charAt(Math.floor(Math.random() * 
// charactersLength));
//  }
//  return result;
// }

// console.log(makeid(5));