// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':',
  ';', '<', '=', '>', '?', '@', '[', "/", '^', '_', '`', '{', "|", "}", "~"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var selection = [lowerCase, symbols, upperCase, numbers];

var generatePassword = function () {
  var characterSelect = window.prompt("How many characters long would you like your password to be?")
  var symbolSelect = window.confirm("Would you like your password to have special characters?")
  var upperSelect = window.confirm("Would you like your password to have upper case letters?")
  var numberSelect = window.confirm("Would you like your password to have numbers?")
  if (symbolSelect === confirm && upperSelect === confirm) {

  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLegth = function (password.length) {
  for (var i = 1; i <= num; i++) {
    console.log(i);
  }
};

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


themeSwitcher.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});