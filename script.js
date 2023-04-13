// Assignment code here
var characterLength = 8;
var choiceArray = []


var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]
var specialChars = ["!", "@", "#", "$", "%", "&", "<", ">", "+", "=",]

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }



  // prompt user for pw criteria
  // pw length between 8-128
  // lower upper etc
  // validate the input
  // generate pw based on criteria

  //display pw to page
  return password
}

function getPrompts() {

  choiceArray = [];

  characterLength = parseInt(prompt("How many characters do you want your pw to be? (8-128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. please try again");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowercaseChars);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(uppercaseChars);
  }

  if (confirm("Would you like special character in your password?")) {
    choiceArray = choiceArray.concat(specialChars);
  }

  if (confirm("Would you like numbers in your password?")) {
    choiceArray = choiceArray.concat(numberChars);
  }
  return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    

    passwordText.value = newPassword;
  } else {
    passwordText.value = "";

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



