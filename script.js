// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


//user input variables

var passwordLength = "";
var confirmSpecialCharacter; 
var confirmNumericCharacters; 
var confirmLowerCasedCharacters; 
var confirmUpperCasedCharacters; 



// Function to generate password with user input
function generatePassword() {
  passwordLength = prompt("How many characters would you like your password to contain?");

  if (!passwordLength) {
    passwordLength = prompt("You haven't chosen any number. Please, try again!");
    if (passwordLength <= 9 || passwordLength >= 65) {
      passwordLength = prompt("You have to choose between 10 and 64. Please, try again.");
    }
  } else if (passwordLength <= 9 || passwordLength >= 65) {
    passwordLength = prompt("You have to choose between 10 and 64. Please, try again.");
  }
  alert("Your password will have " + passwordLength + " characters");

  //call the password option function 
  getPasswordOptions();
  getRandom();

}

// Password options function
function getPasswordOptions() {

  confirmSpecialCharacter = confirm("Would you like to include special charackters? Click OK if yes.");
  confirmNumericCharacters = confirm("Would you like to include numbers? Click OK if yes.");
  confirmLowerCasedCharacters = confirm("Would you like to include lowercased letter? Click OK if yes.");
  confirmUpperCasedCharacters = confirm("Would you like to include uppercased letter? Click OK if yes.");

  if (confirmSpecialCharacter === false && confirmNumericCharacters === false && confirmLowerCasedCharacters === false && confirmUpperCasedCharacters === false) {
    alert("You must choose at least one criteria! Please, try again.");
    confirmSpecialCharacter = confirm("Would you like to include special charackters? Click OK if yes.");
    confirmNumericCharacters = confirm("Would you like to include numbers? Click OK if yes.");
    confirmLowerCasedCharacters = confirm("Would you like to include lowercased letter? Click OK if yes.");
    confirmUpperCasedCharacters = confirm("Would you like to include uppercased letter? Click OK if yes.");
  }
  
  passwordCharacters = [];
  if (confirmSpecialCharacter === true) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }
  if (confirmNumericCharacters === true) {
    passwordCharacters = passwordCharacters.concat(numericCharacters)
  }
  if (confirmLowerCasedCharacters === true) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters)
  }
  if (confirmUpperCasedCharacters === true) {
    passwordCharacters = passwordCharacters.concat(upperCasedCharacters)
  }
  console.log(passwordCharacters);
  
}

// Random element function
function getRandom() {
  randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    randomPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    
  }
  console.log(randomPassword);
  return randomPassword;
  
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = getRandom();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
