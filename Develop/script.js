// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = function(){

 var number = prompt("Write the length of the password") ;
 var lower = prompt("How many lowercase characters");
 var upper = prompt("How many uppercase characters");
 var special = prompt("How many special characters");
 var numeric = prompt("How many numbers");
 var char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numchars = "0123456789";
 var upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowerchars = "abcdefghijklmnopqrstuvwxyz";
 var specialchars = "!@#$%^&*()";

  if(number<8 || number>128) {

   alert("Your password length either greater than 8 or less than 128 ");
   return null;
 }
  console.log(lower,number);
   if(lower>number)
   {
    alert("lowercase length should be less than or equal to the length of the password provided: " +number);
    return null;
   }
   if(upper>number)
   {
     alert("Uppercase length should be less than or equal to length of the password provided: " +number);
     return null;

   }
    if(special>number)
    {
      alert(" Special character length should be less than or equal to length of the password provided: " +number);
      return null;

    } 
   if(numeric>number)
   {
    alert("Number length should be less than or equal to length of the password provided: " +number);
    return null;
   }
 
   var total = parseInt(lower)+parseInt(upper) +parseInt (special) + parseInt(numeric);
   if(total>number) 
   { 
    alert("Total password length should be less than or equal to " +number);
    return null;
   }
   var password = "";
   for( var i=0;i<lower;i++)
   {
    var randomNumber = Math.floor(Math.random() * lowerchars.length);
    password += lowerchars.substring(randomNumber, randomNumber +1);
   } 
   console.log (password);
  for( var i=0;i<upper;i++)
   {
    var randomNumber = Math.floor(Math.random() * upperchars.length);
    password += upperchars.substring(randomNumber, randomNumber +1);
   } 
   console.log (password);
   for( var i=0;i<numeric;i++)
   {
    var randomNumber = Math.floor(Math.random() * numchars.length);
    password += numchars.substring(randomNumber, randomNumber +1);
   } 
   console.log (password);
   for( var i=0;i<special;i++)
   {
    var randomNumber = Math.floor(Math.random() * specialchars.length);
    password += specialchars.substring(randomNumber, randomNumber +1);
   } 
   console.log (password);

   if(total < number)
   {
    var additionalChars = parseInt(number)-parseInt(total);
    for( var i=0;i<additionalChars;i++)
    {
     var randomNumber = Math.floor(Math.random() * char.length);
     password += char.substring(randomNumber, randomNumber +1);
    } 
   }
   console.log (password);

   return password;

  }

  /*number = parseInt(lowerchars)+parseInt(upperchars) +parseInt (specialchars) + parseInt(numericchars);
  
  var password = "";
  for( var i=0;i<number;i++)
  {
   var randomNumber = Math.floor(Math.random() * lowerchars.length);
   password += lowerchars.substring(randomNumber, randomNumber +1);
  } 
  console.log (password);

 
   for( var i=0;i<number;i++)
   {
    var randomNumber = Math.floor(Math.random() * upperchars.length);
    password += upperchars.substring(randomNumber, randomNumber +1);
   } 
   console.log (password);

   for( var i=0;i<number;i++)
   {
    var randomNumber = Math.floor(Math.random() * numchars.length);
    password += numchars.substring(randomNumber, randomNumber +1);
   } 


   for( var i=0;i<number;i++)
   {
    var randomNumber = Math.floor(Math.random() * specialchars.length);
    password += specialchars.substring(randomNumber, randomNumber +1);
   } 
   console.log (password);*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
