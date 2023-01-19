// Assignment Code
var generateBtn = document.querySelector("#generate");
var capAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lowAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = ['!', '~', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '_', '`', '?', ':', '.', '/', '|', '{', '}'];
var a = [];
var b = [];
var c = [];
var d = [];


// Add event listener to generate button
generateBtn.addEventListener("click", doebatsa);

function doebatsa(){
  
  
  var length = window.prompt('Choose password length between 8 and 128');
  var typeL = typeof(length);
  console.log(length);


  if(typeL == 'object'){
    goodBye();
  }else if(length > 8 && length < 128){
    console.log('im in');
    options();
    console.log('options selected');


    var almostThere = a.concat(b).concat(c).concat(d);
    console.log(almostThere);
    var password = [];
    for(let i=0; i < length; i++){
      var rand = Math.floor(Math.random()*almostThere.length);
      password.push(almostThere[rand]);
    }

    //Joining arrray charachters into a string
    password = password.join('');
    console.log(password);

    // Write password to the #password input
    function writePassword() {
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
    writePassword()




  }else{
    console.log('else');
    window.alert('Please select correct value');
    doebatsa();
  }
    
  console.log('outside if the loops');
}

function goodBye(){
  console.log('Thanks for playing');
  window.alert('Thanks for playing');
}

//Function inquires about password options to include: lowercase, uppercase, numeric, and/or special characters
function options(){
  var upSelect = window.confirm("Would you like to use any upper case charachters?");
      console.log(upSelect);
      if(upSelect) a = capAlphabet;
  var lowSelect = window.confirm("Would you like to use any lower case charachters?");
      console.log(lowSelect);
      if(lowSelect) b = lowAlphabet;
  var digSelect = window.confirm("Would you like to use any number charachters?");
      console.log(digSelect);
      if(digSelect) c = digits;
  var spcSelect = window.confirm("Would you like to use any special charachters?");
      console.log(spcSelect);
      if(spcSelect) d = special;
  var check = upSelect+lowSelect+digSelect+spcSelect;
      console.log(check);
  //Checking to make sure at least one option is selected
  if(check < 1){
    window.alert('Warning!\nYou must select at least one of the following options:\nLowercase, uppercase, numeric, and/or special characters')
    options();}
  }



