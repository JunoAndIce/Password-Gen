// When I click the button
// The windows asks how many characters I want
// then the window will ask if I want upper case characters
// THEN the window will ask if I want lower case characers
// THEN the window will ask if I want numerics.
// THEN the window will ask if i want special characters.
// THEN The website will generate a password into the textbank

// TODO: Password should always give a password based on the choices picked by the user
// TODO: Have a case for each combination of choices

// Get references to the #generate element
var generateBtn = document.querySelector("#gen-btn");

//Below are every character possible that my password can use.
const lowerCaseLetterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseLetterBank = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericalNumbersBank = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharactersBank = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "[", "]", "|", "<", ">", "/"];

function genPassword(){

  //Password Length
var passLength = prompt("Please enter length of your password (between 8 to 128 characters", "8 - 128");

 // String to int 
var passLengthInt = parseInt(passLength);

 // Checks if password length input meets all criteria to continue.
if(passLengthInt < 8 || passLengthInt > 128 || isNaN(passLengthInt)){
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


// Loop through different combination of choices and generate a password based on the users selections
// Need the key variable to exit the box if all false

var key = true;

while(passLengthInt > randomPasswordGenerated.length && key === true)
  {
    var combinedPassword = "";

    if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == true && specialCharacters == true)
    {
        combinedPassword = lowerCaseLetterBank.concat(upperCaseLetterBank, numericalNumbersBank, specialCharactersBank);
        randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == true && specialCharacters == true)
    {
        combinedPassword = lowerCaseLetterBank.concat(numericalNumbersBank, specialCharactersBank);
        randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == false && specialCharacters == true)
    {
        combinedPassword = lowerCaseLetterBank.concat(upperCaseLetterBank, specialCharactersBank);
        randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == false && specialCharacters == true)
    {
        combinedPassword = lowerCaseLetterBank.concat(specialCharactersBank);
        randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == true && specialCharacters == false)
    {
      combinedPassword = lowerCaseLetterBank.concat(upperCaseLetterBank, numericalNumbersBank);
      randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == true && specialCharacters == false)
    {
      combinedPassword = lowerCaseLetterBank.concat(numericalNumbersBank);
      randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }
  

    if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == false && specialCharacters == false)
    {
      combinedPassword = lowerCaseLetterBank.concat(upperCaseLetterBank);
      randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == false && specialCharacters == false)
    {
      combinedPassword = lowerCaseLetterBank;
      randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == true && specialCharacters == true)
    {
      combinedPassword = upperCaseLetterBank.concat(numericalNumbersBank, specialCharactersBank);
      randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == true && specialCharacters == true)
    {
      combinedPassword = numericalNumbersBank.concat(specialCharactersBank);
      randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == false && specialCharacters == true)
    {
      combinedPassword = upperCaseLetterBank.concat(specialCharactersBank);
      randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == false && specialCharacters == true)
    {
      combinedPassword = specialCharactersBank;
       randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == true && specialCharacters == false)
    {
      combinedPassword = upperCaseLetterBank.concat(numericalNumbersBank);
      randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == true && specialCharacters == false)
    {
      combinedPassword = numericalNumbersBank;
      randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == false && specialCharacters == false)
    {
      combinedPassword = upperCaseLetterBank;
      randomPasswordGenerated += combinedPassword[Math.floor(Math.random() * combinedPassword.length)]; 
    }


    if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == false && specialCharacters == false)
    {
      window.alert("ERROR: Please select yes to at least one to create your password.");
      
      // Ends while loop
      key = false; 
      return("No password criteria given")
    }
} 
  return [randomPasswordGenerated];
}



function writePassword() {

  //Runs genPassword() function
  var password = genPassword();

  // grabs password id aka the textarea element
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // Logs the password in console for debug.
  // console.log(password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);