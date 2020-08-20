


// Assignment Code
var generateBtn = document.querySelector("#generate");
//Arrays of characters 
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var numericCharacters = "0123456789";
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var totalCharacters = [];

//confirmation variables for usage of different characters

function writePassword() {
  // var password = generatePassword();
   var passwordText = document.querySelector("#password");
    passwordText.value =generatePassword();

}
//return a string
function generatePassword() {
  var userPassword = "";
  selectedCharacters = "";
  //  function confirmCharacters() {
      // get user options and store in vars
    var  confirmLength = prompt('how many characters would you like your password to be?');

     
        if (confirmLength >= 8) {
             // check for length (it should be longer than 8 and shorter than 128)
    var confirmLower = confirm("do you want lowercase numbers?");
    var confirmUpper = confirm("do you want uppercase numbers?");
    var confirmNumeric = confirm("do you want numeric?");
    var confirmspecialCharacter = confirm("do you want special characters?");
      // check if lower
      // check if upper
      // check if special
      // check if numeric
      // check that at least one is true
        // else - alert user
        if (confirmLower) {
          selectedCharacters.concat(lowerCasedCharacters)
          console.log(selectedCharacters);
        }
        if (confirmUpper) {
          selectedCharacters.concat(upperCasedCharacters)
        }
        if (confirmNumeric) {
          selectedCharacters += numericCharacters
        }
        if (confirmspecialCharacter) {
          selectedCharacters.concat(specialCharacters)
        }
        if (confirmLower === false && !confirmUpper) {
          alert ("please pick at least one character type");
          return;
        }
        for (i = 0; i < confirmLength; i++ ){
          userPassword += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];

        }
        console.log(userPassword);
          return userPassword;
        }
        else {
          alert ("please choose a length between 8 and 128")
        };
      
    }
// };

    

      // if lower
        // push a random lower char to password
        // add lowerCharsArray to userOptionalChars
      // if upper
        // push a random upper char to password
        // add upperCharsArray to userOptionalChars
      // if special
        // push a random special char to password
        // add specialCharsArray to userOptionalChars
      // if numeric
        // push a random numeric char to password
        // add numericCharsArray to userOptionalChars
      // for loop between start number of elemnts in password to the requested number of charactars
      // mutate the array to a string
      // return password string
    
   // ======= functions calls (start) ======
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TO DO- change all arrays to strings and change concat to +=




