var vicCount = prompt("How many disater victims are you recording?");

var vicNameArray = []
var vicPhoneArray = []
var vicStreetArray = []

for (i = 0; i < vicCount; i++) {
  var vicName = prompt("Please enter the victim's name:")
    vicNameArray.push(vicName)
  var vicPhone = prompt("Please enter the victim's phone number:")
    vicPhoneArray.push(vicPhone)
  var vicStreet = prompt("Plase enter the victim's street address:")
    vicStreetArray.push(vicStreet)
}

var volCount = prompt("How many volunteers are you recording?");

var volNameArray = []
var volPhoneArray = []
var volStreetArray = []

for (i = 0; i < volCount; i++) {
  var volName = prompt("Please enter the volunteer's name:")
    volNameArray.push(volName)
  var volPhone = prompt("Please enter the volunteer's phone number:")
    volPhoneArray.push(volPhone)
  var volStreet = prompt("Plase enter the volunteer's street address:")
    volStreetArray.push(volStreet)
}

document.write("There are " + vicCount + " victim(s).</br>");
document.write(vicNameArray);
document.write("</br></br>There are " + volCount + " volunteer(s).</br>");
document.write(volNameArray);
































// var disaster_prompt = function(person) {
// 	var list = {}
// 	var addAnother = "y";
// 	var count = 0
// 	while (addAnother === "y") {
//   	var name = prompt("Enter the " + person + "'s name.");
// 		var info = prompt("Enter the " + person + "'s phone number and address");
// 		addAnother = prompt("Do you wish to continue? ('y' or 'n')")
// 		list[name] = info;
// 		count ++
// 	}
// 		document.write("<br/><br/><strong>There are " + count + " " + person +
//                     "s:</strong><br/>")
// 		Object.keys(list).forEach(function(key) {
//     		document.write(
//     			key  + " at " +
// 				list[key] + "<br/>"
// 			);
// 		});
// }
//
// disaster_prompt(person="victim")
// disaster_prompt(person="volunteer")
