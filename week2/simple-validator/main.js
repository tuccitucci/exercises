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

var postalCode = prompt("Now I need your Zip Code"
  + "\nSeriously I cannot make this up!\n...and it better be written in"
  + "XXXXX or XXXXX-XXXX format you scoundrel!");

function validatePostalCode(properCode) {
  return properCode.length === 5 || properCode.length === 10;
}
alert(validatePostalCode(postalCode));


var stateCode = prompt("You will not believe this..."
  + "\nNow I need your current state\n...and it better be written in"
  + "a two-letter abbreviation format you lovely thing you!");

function validateStateCode(properState) {
  return properState.length === 2 && properState.toUpperCase();
}
alert(validateStateCode(stateCode));



var simple_marriage_validator = function(word) {
	alert(married.toLowerCase() === "yes" || married.toLowerCase() == "no");
};

var married = prompt('Are you married ("yes" or "no")');
simple_marriage_validator(married)
