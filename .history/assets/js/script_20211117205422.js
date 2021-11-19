 // Assignment Code
var generateBtn = document.querySelector("#generate");
console.log (generateBtn);
var special =["!","@","#","$","%","^","&","*","(",")","=","-","+"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];

function generatePassword(){
  //declaring our variables with prompts to ask what people what in their password
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