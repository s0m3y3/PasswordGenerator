// Password Generator. 
//This code generate a random password(pw) between 8-126 characters, using upper/lower case alphabet, numbers, and special characters. 
const alphaLower = 'abcdefghijklmnopqrstuvwxyz'; //Lines 3-6 are the four criterias for the password generator
const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '0123456789';
const SpecialCharacters = "!\"#$%&\'()*+,-./:<=>?@[]^_`{}|~\\;";

let generateBtn = document.querySelector("#generate");

function writePassword() {//This function generate password and report results to html.
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){ //this function generate the final password for the user, with their criteria and pw length. 
  let characterpool=''; //list of character the pw generator will pull from
  let finalpw =''; //final password to be return
  let pwlength = prompt("How long would you like the password to be (integer only, between 8-128)??"); //user's pw length input

  if(Math.trunc(pwlength) - pwlength!=0){ //double check if number is an integer. If not, alert user & runs 'generatePassword()' again. 
    alert("Please enter a whole number");
    return generatePassword();    
  }

  //check password length meets criteria 8-128. If failed, will alert user & generatePassword() again.
    if(pwlength >=8  && pwlength <= 128){//check if pw length between 8-128. 

      //line 27-43 ask user to confirm on the four criterias. If yes, then include in pw character pool selection.       
      let lowercase = confirm("Would you like to have lowercase alphabet? (Y/N)") 
      if(lowercase==true){ 
        characterpool += alphaLower;
      } 
      let uppercase = confirm("Would you like to have uppercase alphabet? (Y/N)")
      if(uppercase==true){
        characterpool += alphaUpper;
      } 
      let num = confirm("Would you like to have numbers? (Y/N)")
      if(num==true){ 
        characterpool += number;
      } 
      let SpecChar = confirm("Would you like to have special characters? (Y/N)")
      if(SpecChar==true){
        characterpool += SpecialCharacters;
      } 
      if(characterpool===''){  //This check if any 4-criteria above is selected. If none, then alert user that no password is generated. 
        alert("No Criteria was selected, no Password generated")
        return;
      }
      //The for loop will generate the random password based on the password length, and any of the four criteria selected with their respective characters. 
      for (let i=0;i<pwlength;i++){  
        random = Math.floor(Math.random() * characterpool.length); 
        finalpw +=characterpool[random];
      }
    }
    else { 
      alert("Invalid entry. Please try again");
      generatePassword();
    }
  return finalpw; //returns final generated password. 
}

generateBtn.addEventListener("click", writePassword);