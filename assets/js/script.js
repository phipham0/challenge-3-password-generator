// Defines password length and character types as global variables
var passwordLength;
var containsLowercase = false;
var containsUppercase = false;
var containsNumeric = false;
var containsSpecial = false;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  promptCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates password in textbox
function generatePassword(){
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "! \"#$%&\'()*+,-./:;<=>?@[\\\]^_`{|}~";
  var charBank = "";
  var password = "";

  // Adds character type banks together according to variable
  if (containsLowercase){
    charBank += lowercase;
  }
  if (containsUppercase){
    charBank += uppercase;
  }
  if (containsNumeric){
    charBank += numbers;
  }
  if (containsSpecial){
    charBank += special;
  }
  for (var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * charBank.length);
    password += charBank.charAt(random);

  }
  return password;
}

// Prompts for password criteria
function promptCriteria() {
  var notValidLength = true;
  var notValidChars = true;

  // Password length prompt
  while (notValidLength) {
    passwordLength = prompt("Please type the length of your password. It must be at least 8 characters and no longer than 128 characters.");
    if (validateLength(passwordLength) == false){
      alert("Please enter a valid length.");
    }
    else {
      notValidLength = false;
    }
  }
  
  // Prompts for character types
  while (notValidChars){
    var count = 0;

    // Lowercase prompt
    containsLowercase = confirm("Will your password include LOWERCASE characters?");
    if (containsLowercase) {
      count++;
    }
    // Uppercase prompt
    containsUppercase = confirm("Will your password include UPPERCASE characters?");
    if (containsUppercase) {
      count++;
    }
    //Numeric prompt
    containsNumeric = confirm("Will your password include NUMBERS?");
    if (containsNumeric) {
      count++;
    }
    //Special prompt
    containsSpecial = confirm("Will your password include SPECIAL characters (e.g., ! # $ % &)?");
    if (containsSpecial) {
      count++;
    }
    // Validation if no prompts answered
    if (count < 1) {
      alert("Please click OK for at least one character type. ")
    }
    else {
      notValidChars = false;
    }
  }
}

// Validation for length of password
function validateLength(length) {
  var notNaN = !isNaN(length);
  var notNull = length != null;

  if (length >= 8 && length <= 128 && notNaN && notNull ) {
    return true;
  }
  return false;
}
