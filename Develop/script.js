// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var capAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = ['!', '~', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '_', '`', '?', ':', '.', '/', '|', '{', '}'];
var a = [];
var b = [];
var c = [];
var d = [];


// Add event listener to generate button
generateBtn.addEventListener("click", doebatsa);

function doebatsa(){
  
  //Clearing out old values
  a = [];
  b = [];
  c = [];
  d = [];

  //Asking for password length
  var length = window.prompt('Choose password length between 8 and 128');
  
  //Checking for for breakout command
  var typeL = typeof(length); 
  if(typeL == 'object'){
    goodBye();

  //Checking for valid number length
  }else if(length > 8 && length < 128){
    options();
    var almostThere = a.concat(b).concat(c).concat(d);
    
    //Clearing out old password
    var password = [];

    //Generating new password
    for(let i=0; i < length; i++){
      var rand = Math.floor(Math.random()*almostThere.length);
      password.push(almostThere[rand]);
    }

    //Joining arrray charachters into a string
    password = password.join('');

    // Write password to the #password input
    function writePassword() {
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
    writePassword()

  }else{
    window.alert('Please select correct value');
    doebatsa();
  }   
}

function goodBye(){
  window.alert('Thanks for playing');
}

//Function inquires about password options to include: lowercase, uppercase, numeric, and/or special characters
function options(){
  var upSelect = window.confirm("Would you like to use any upper case charachters?");
      if(upSelect) a = capAlphabet;
  var lowSelect = window.confirm("Would you like to use any lower case charachters?");
      if(lowSelect) b = lowAlphabet;
  var digSelect = window.confirm("Would you like to use any number charachters?");
      if(digSelect) c = digits;
  var spcSelect = window.confirm("Would you like to use any special charachters?");
      if(spcSelect) d = special;
  var check = upSelect+lowSelect+digSelect+spcSelect;
  //Checking to make sure at least one option is selected
  if(check < 1){
    window.alert('Warning!\nYou must select at least one of the following options:\nLowercase, uppercase, numeric, and/or special characters')
    options();}
  }