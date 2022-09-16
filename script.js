// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperAlph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCha = ['!', '@', '%', '&', '#', '^', '/',];
const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9',];
const criteria = [lowerAlph, upperAlph, specialCha, num];


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

  let criteriaSelect = [lowercase, uppercase, numeric, specialChar];
  const newCriteria = [];

  for (i = 0; i < criteria.length; i++) {
    if (criteriaSelect[i]) {
      newCriteria.push(criteria[i]);
    }
  }

  console.log(newCriteria);
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