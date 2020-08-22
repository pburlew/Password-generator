


var generateBtn = document.querySelector("#generate");
//Arrays of characters 
var specialCharacters = "@%+\\/'!#$^?:`)(}{][~-_.";
var numericCharacters = "0123456789";
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var totalCharacters = [];


// the text of password displayed
function writePassword() {
 
   var passwordText = document.querySelector("#password");
    passwordText.value =generatePassword();

}

//ask user prompts for criteria to write password
function generatePassword() {
  var userPassword = "";
  selectedCharacters = "";
  //  function confirmCharacters() {
      // get user options and store in vars
    var  confirmLength = prompt('how many characters would you like your password to be?');

     
        if (confirmLength >= 8) {
             // check for length (it should be longer than 8)
    var confirmLower = confirm("do you want lowercase numbers?");
    var confirmUpper = confirm("do you want uppercase numbers?");
    var confirmNumeric = confirm("do you want numeric?");
    var confirmspecialCharacter = confirm("do you want special characters?");
      // check if lower , upper, special, numeric
      
      // check that at least one is true
        // else - alert user
        if (confirmLower) {
          selectedCharacters += lowerCasedCharacters
          // console.log(selectedCharacters);
        }
        if (confirmUpper) {
          selectedCharacters += upperCasedCharacters
        }
        if (confirmNumeric) {
          selectedCharacters += numericCharacters
        }
        if (confirmspecialCharacter) {
          selectedCharacters += specialCharacters
        }
        if (confirmLower === false && !confirmUpper) {
          alert ("please pick at least one character type");
          return;
        }
        //randomize password using the length chosen by user stored in confirmLength
        for (i = 0; i < confirmLength; i++ ){
          userPassword += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];

        }
        // console.log(userPassword); use this to check that everything is running correctly in console
          return userPassword;
        }
        else {
          alert ("please choose a length between 8 and 128")
        };
      
    }
// };

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





