var phoneNumber = prompt("Do you wish to move forward?"
  + "\nGimme a PHONE NUMBER!...\n...and it better be written in"
  + "xxx-xxx-xxxx format son!");

function validatePhoneNumber(properPhone) {
  return properPhone.charAt(3) === "-" && properPhone.charAt(7) === "-";
}
alert(validatePhoneNumber(phoneNumber));

var birthDate = prompt("When were you born????"
  + "\nSeriously I need to know!\n...and it better be written in"
  + "MM/DD/YY format you wascally wabbit!");

function validateBirthDate(properDate) {
  return properDate.charAt(2) === "/" && properDate.charAt(5) === "/";
}
alert(validateBirthDate(birthDate));





// phoneNumber.indexOf("-");
// phoneNumber.lastIndexOf("-");
// phoneNumber.split('').forEach
// phoneNumber.forEach(function(prompt) {
//   if (!parseInt[3] && [7] !== '-') {
//      return 'Not Valid!!!!!';
//   }
// });




// if (phoneNumber === phoneNumber.length[12]) {
//     alert = "Well Done";
// } else {
//     alert = "Try Again";
// }

// alert("You entered: " + answer + "\nThere are " + answer.length + " characters in the word" + "\nThe third character is " + answer.charAt(2) + "\nLowercase: " + answer.toLowerCase() + "\nUppercase: " + answer.toUpperCase() + "\nHow much " + answer + " could a " + answer + "chuck chuck if a " + answer + "chuck could chuck " + answer + "!" + "\nSubword: " + answer.substr(1,3))
