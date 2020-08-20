


// Assignment Code
var generateBtn = document.querySelector("#generate");
//Arrays of characters 
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var totalCharacters = [];

//confirmation variables for usage of different characters


//return a string
function generatePassword() {
   


   function confirmCharacters() {
      // get user options and store in vars
      prompt('how many characters would you like your password to be?');
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
          alert ("add lowercase letters.");
          selectedCharacters.concat (lowerCasedCharacters)
        }
        if (confirmUpper) {
          alert ("add uppercase letters.");
          selectedCharacters.concat (upperCasedCharacters)
        }
        if (confirmNumeric) {
          alert ("add numeric characters.");
          selectedCharacters.concat (numericCharacters)
        }
        if (confirmspecialCharacter) {
          alert ("add special characters.");
          selectedCharacters.concat (specialCharacters)
        }
        if (confirmLower === false && !confirmUpper) {
          alert ("please pick at least one character type");
          getUserOptions;
          return;
        }
        writePassword();
    }
};

    function writePassword(confirmCharacters) {
       var passwordText = document.querySelector("#password");
        passwordText.value = password;
      var password = "";

      for (var i =0; i < promptLength; i++){

        return password;
      }

    }

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

// 





