// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':',
  ';', '<', '=', '>', '?', '@', '[', "/", '^', '_', '`', '{', "|", "}", "~"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];




var generatePassword = function () {
  // Assignment code here
  var pass = [];
  // running an empty string for the answer (password) to be put for the user to see.
  var strng = [];

  var characterSelect = window.prompt("How many characters long would you like your password to be?(minimum of 8, maximum of 128 characters long)")

  if (characterSelect < 8 || characterSelect > 128) {
    window.alert("You must select a minimum of 8 characters, and a maximum of 128.")
    return null
  }

  var symbolSelect = window.confirm("Would you like your password to have special characters?")
  var upperSelect = window.confirm("Would you like your password to have upper case letters?")
  var numberSelect = window.confirm("Would you like your password to have numbers?")
  var lowerSelect = window.confirm("Would you like your password to have lowercase letters?")

  if (symbolSelect === false && upperSelect === false && numberSelect === false && lowerSelect === false) {
    window.alert("You must select at least one type of character.")
    return null
  }

  if (symbolSelect) {
    pass = pass.concat(symbols);
  }
  if (upperSelect) {
    pass = pass.concat(upperCase);
  }
  if (numberSelect) {
    pass = pass.concat(numbers);
  }
  if (lowerSelect) {
    pass = pass.concat(lowerCase);
  }

  for (var i = 0; i < characterSelect; i++) {
    var randomCharacter = random(pass)
    strng.push(randomCharacter)
  }

  return strng.join('');
}

function random(x) {
  return x[Math.floor(Math.random() * x.length)]
}

// Write password to the #password input
function writePassword() {
  strng = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = strng;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var passwordLegth = function (password.length) {
//   for (var i = 1; i <= num; i++) {
//     console.log(i);
//   }
// };

// Listen for a click event on toggle switch


// max of 128 char and a min of 8

// define all characters
// set up the inputs for password criteria
// use a for loop for the password length requirements
// set up if else statement for each possible senario for user inputs
// Make the solution as a variable at the end(run the function at the end)
// you need to call the answer into the HTML 
// pick a random number to select a random character from each array(use .lenth instead of 
//inputing how many items are in the array)