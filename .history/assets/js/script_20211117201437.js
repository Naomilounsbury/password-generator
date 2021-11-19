 // Assignment Code
var generateBtn = document.querySelector("#generate");
console.log (generateBtn);
function generatePassword(){
console.log("something");
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