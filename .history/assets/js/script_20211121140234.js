// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
//creating an array for all the characters in the password
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "-", "+"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//creating a place to hold the choosen (by the consumer) characters 
var passwordPool = []
//we needed a function that would go in and grab one 
//character from each array because otherwise we may 
//end up with a password that doesn't use all the list items.
//the function is reusable so we can use it to grab any random character from any list that we need to.
function grabRandom(list) {
  //we made the maxLength first because we don't go over that
  var maxLength = list.length - 1
  //we used math to do something
  var random = Math.floor(Math.random() * (maxLength - 0 + 1)) + 0;
  //the return is there to return the random character
  return list[random]
}
//a fuction holds a block of code that you want to reuse and a variable holds a value. 
//you can use functions anywhere. var functions can only be used below that 
function generatePassword() {
  var finalPassword = []
  //declaring our variables with prompts to ask what people what in their password
  var passwordLength = prompt("How long do you want your password to be? Please enter a number between 8 and 128.");
  console.log(typeof passwordLength)
   if (parseInt(passwordLength) > 8 || parseInt(passwordLength) < 128) {
 
   }
  var passwordSpecialCharacter = confirm("Do you want any special characters in your password? (OK meaning 'yes' and cancel meaning 'no'");
  var passwordUpperCase = confirm("Do you want an upper case letters in your password? ");
  var passwordLowerCase = confirm("Do you want any lower case letters in your password?");
  var passwordNumbers = confirm("Do you want any numbers in your password? ");
  console.log(passwordLength, passwordSpecialCharacter, passwordUpperCase, passwordLowerCase, passwordNumbers);
  }

  // four individual if statements to check if they answered yes to each question
  // validate prompt answer
  if (passwordSpecialCharacter === true) {
    //we are adding our characters from the special list into our character pool
    passwordPool.push(...special);
    //we are using our grabRandom function to take a single character from the special array and push(add it) it to the finalPassword.
    //we know that this will put a random character first every time. We don't care; its still random.
    finalPassword.push(grabRandom(special));
  }
  if (passwordUpperCase === true) {
    passwordPool.push(...upper);
    finalPassword.push(grabRandom(upper));
  }
  if (passwordLowerCase === true) {
    passwordPool.push(...lower);
    finalPassword.push(grabRandom(lower));
  }
  if (passwordNumbers === true) {
    passwordPool.push(...number);
    finalPassword.push(grabRandom(number));
  }
  //create a for loop that runs however many times 
  //but first we need to find out how long the loop needs to be
  //because we pushed those chosen (by the consumer) characters into the final password
  var remaining = passwordLength - finalPassword.length
  for (let i = 0; i < remaining; i++) {
    //for each loop we want to take one charcter from the password pool
    finalPassword.push(grabRandom(passwordPool));

  }
  // after weve looped through, final password should have the length that the user wanted and have any characters that they chose.
  //we used .join to join everything that we previously grabbed and put it together.
  return finalPassword.join("");
//
}


// Write password to the #password input
 
function writePassword() {
  //so this is literally running the function we made above and putting it with the id #password in the html
  var password = generatePassword();
  // so this corresponds to the id in the html
  var passwordText = document.querySelector("#password");
//I'm not exactly sure what this means
  passwordText.value = password;
  //What I don't understand is this return final password because finalPassword was only inside the previous function
  //so how is this doing anything? Is it doing anything?
  return finalPassword
}

// Add event listener to generate button, it feels like its going backward but the way I understand it
// is the click is down here so when that happen, the function write password goes off with a bang but 
// writePassword makes the generatePassword function go and then the function grabRandom goes and then it filters back down
generateBtn.addEventListener("click", writePassword);


