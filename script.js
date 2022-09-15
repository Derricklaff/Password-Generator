// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperAlph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCha = ['!', '@', '%', '&', '#', '^', '/',];
const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9',];
const nestedArray = [lowerAlph, upperAlph, specialCha, num];


function generatePassword() {
  length = prompt("How many characters should the password be? (please select between 8 and 128 characters)");
  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128")
    generatePassword()
  } else {
    lowercase = confirm("Would you like lowercase letters in the password?");
    uppercase = confirm("Would you like uppercase letters in the password?");
    numeric = confirm("would you like numbers in the password?");
    specialChar = confirm("Would you like to have special characters in the password?");
  }
  passw = ""
  for (i = 0; i <= length; i++) {
    newChar = nestedArray[Math.floor(Math.random) * 3]
    if (newChar = lowerAlph) {

    } else if (newChar = upperAlph) {

    } else if (newChar = num) {

    } else if (newChar = specialCha) {

    }
  }
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

console.log( var = casd math.floor(math.random()) * length.length; password += nestedArray.substring(randomNumber, randomNumber + 1));