// When I click the button
// The windows asks how many characters I want
// then the window will ask if I want upper case characters
// THEN the window will ask if I want lower case characers
// THEN the window will ask if I want numerics.
// THEN the window will ask if i want special characters.
// THEN The website will generate a password into the textbank


// Get references to the #generate element
var generateBtn = document.querySelector("#gen-btn");

//Below are every character possible that my password can use.
const lowerCaseLetterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseLetterBank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericalNumbersBank = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharactersBank = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "[", "]", "|", "<", ">", "/"];

function generatePassword(){

  //Password Length
 var passwordLength = prompt("Please enter length of your password (between 8 to 128 characters", "8 - 128");

 // String to int 
 var intPasswordLength = parseInt(passwordLength);

 // Checks if password length input meets all criteria to continue.
 if(intPasswordLength < 8 || intPasswordLength > 128 || isNaN(intPasswordLength)){
   window.alert("Please enter a valid integer between 8 and 128");
   return("Invalid entry")
 }

// More password queries.
 var lowerCaseLetters = window.confirm("Include lowercase?");
 var upperCaseLetters = window.confirm("Include uppercase?");
 var numericalNumbers = window.confirm("Include numerical numbers?");
 var specialCharacters = window.confirm("Include special characters?");



//Empty password to keep adding onto. Length here will be 0.
 var randomPasswordGenerated = "";


 // loop through different combination of choices and generate a password based on the users selections
//Need the key variable to exit the box if all false

 var key = true;

 while(intPasswordLength > randomPasswordGenerated.length && key === true)
   {
     var combinedPassword = "";

     if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == true && specialCharacters == true)
     {
         combinedPasswordBank = lowerCaseLetterBank.concat(upperCaseLetterBank, numericalNumbersBank, specialCharactersBank);
         randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == true && specialCharacters == true)
     {
         combinedPasswordBank = lowerCaseLetterBank.concat(numericalNumbersBank, specialCharactersBank);
         randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == false && specialCharacters == true)
     {
         combinedPasswordBank = lowerCaseLetterBank.concat(upperCaseLetterBank, specialCharactersBank);
         randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == false && specialCharacters == true)
     {
         combinedPasswordBank = lowerCaseLetterBank.concat(specialCharactersBank);
         randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == true && specialCharacters == false)
     {
       combinedPasswordBank = lowerCaseLetterBank.concat(upperCaseLetterBank, numericalNumbersBank);
       randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == true && specialCharacters == false)
     {
       combinedPasswordBank = lowerCaseLetterBank.concat(numericalNumbersBank);
       randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }
   

     if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == false && specialCharacters == false)
     {
       combinedPasswordBank = lowerCaseLetterBank.concat(upperCaseLetterBank);
       randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == false && specialCharacters == false)
     {
       combinedPasswordBank = lowerCaseLetterBank;
       randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == true && specialCharacters == true)
     {
       combinedPasswordBank = upperCaseLetterBank.concat(numericalNumbersBank, specialCharactersBank);
       randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == true && specialCharacters == true)
     {
       combinedPasswordBank = numericalNumbersBank.concat(specialCharactersBank);
       randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == false && specialCharacters == true)
     {
       combinedPasswordBank = upperCaseLetterBank.concat(specialCharactersBank);
       randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == false && specialCharacters == true)
     {
       combinedPasswordBank = specialCharactersBank;
       randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == true && specialCharacters == false)
     {
       combinedPasswordBank = upperCaseLetterBank.concat(numericalNumbersBank);
       randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == true && specialCharacters == false)
     {
       combinedPasswordBank = numericalNumbersBank;
       randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == false && specialCharacters == false)
     {
       combinedPasswordBank = upperCaseLetterBank;
       randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
     }


     if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == false && specialCharacters == false)
     {
       window.alert("ERROR: Please select yes to at least one to create your password."); //This message will appear if user clicked cancel to everything. 
       return("No password criteria given")
       key = false; //Set key to false here so that the window alert will close
     }
 } 
 return [randomPasswordGenerated];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // Logs the password in console for debug.
  // console.log(password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);