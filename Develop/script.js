// Assignment code here
var pass = [];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':',
  ';', '<', '=', '>', '?', '@', '[', "/", '^', '_', '`', '{', "|", "}", "~"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var selection = [lowerCase, symbols, upperCase, numbers];

var strng = ("")

var generatePassword = function () {
  var characterSelect = window.prompt("How many characters long would you like your password to be?(minimum of 8, maximum of 128 characters long)")
  var symbolSelect = window.confirm("Would you like your password to have special characters?")
  var upperSelect = window.confirm("Would you like your password to have upper case letters?")
  var numberSelect = window.confirm("Would you like your password to have numbers?")
  var lowerSelect = window.confirm("Would you like your password to have lowercase letters?")
  if (symbolSelect) {
    pass = pass.concat(symbols);
    strng = strng + symbols[Math.floor(Math.random() * symbols.length)];
    console.log(symbolSelect);
  }
  if (upperSelect) {
    pass = pass.concat(upperCase);
    strng = strng + upperCase[Math.floor(Math.random() * upperCase.length)];
    console.log(upperSelect);
  }
  if (numberSelect) {
    pass = pass.concat(numbers);
    strng = strng + numbers[Math.floor(Math.random() * numbers.length)];
    console.log(numberSelect);
  }
  if (lowerSelect) {
    pass = pass.concat(lowerCase);
    strng = strng + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    console.log(lowerSelect);
  }
  if (pass.length <= 7) {
    window.alert("You must select at least one type of character, a minimum of 8 characters, and a maximum of 128.")
  }

  if (8 > characterSelect < 128) {
    var num = characterSelect - strng.length;
    for (var i = 1; i <= num; i++) {
      strng = strng + pass[Math.floor(Math.random() * pass.length)];
    }
    // run else statement to display message asking to specify characters 8-128
    console.log(strng)
  } else {
    window.alert("Please select a number between 8 and 128!")
  }
  return strng;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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