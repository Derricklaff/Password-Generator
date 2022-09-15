// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  length = prompt("How long should the password be?");
  lowercase = confirm("Would you like lowercase letters in the password?");
  uppercase = confirm("Would you like uppercase letters in the password?");
  numeric = confirm("would you like numbers in the password?");
  specialChar = confirm("Would you like to have special characters in the password?");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


generatePassword()