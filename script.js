// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = function(){

 var number = prompt("Write the length of the password") ;
 var lower = confirm("Do you want lower case characters");
 var upper = confirm("Do you want uppper case characters");

 var special = confirm("Do you want special characters");
 var numeric = confirm("Do you want numbers");
 var char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numchars = "0123456789";
 var upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowerchars = "abcdefghijklmnopqrstuvwxyz";
 var specialchars = "!@#$%^&*()";

  if(number<8 || number>128) {

   alert("Your password length either greater than 8 or less than 128 ");
   return null;
 }

   var password = "";
  while(password.length<number)
   { 

        if(lower)
        {
          var randomNumber = Math.floor(Math.random() * lowerchars.length);
          password += lowerchars.substring(randomNumber, randomNumber+1); 
          if(password.length==number)
          break;
        }
        if(upper)
        {
          var randomNumber = Math.floor(Math.random() * upperchars.length);
          password += upperchars.substring(randomNumber, randomNumber +1);
          if(password.length==number)
          break;
        } 
        if(numeric)
        {
          var randomNumber = Math.floor(Math.random() * numchars.length);
          password += numchars.substring(randomNumber, randomNumber +1);
          if(password.length==number)
          break;
        } 
        if(special)
        {
          var randomNumber = Math.floor(Math.random() * specialchars.length);
          password += specialchars.substring(randomNumber, randomNumber +1);
          if(password.length==number)
          break;
        } 
   
   }
   return password;
  }
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
