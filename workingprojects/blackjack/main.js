function randomCard() {
  return Math.floor( Math.random() * (10 - 1) ) +  1;
}

  console.log(randomCard());
  console.log(randomCard());
  console.log(randomCard());


var results={
      "8,8,2":"SPLIT!",
      "3,8,6":"DOUBLE DOWN!",
      "9,10,6":"STAND!"
  };


  document.write(results["8,8,2"])

  // declare 3 variables, firstCard, secondCard, dealerCard
  // set each of those variables to the output of the randomCard function
  // order the first and second card so that they are in lowest to highest order
  // combine all 3 variables into a new string variable that is formatted 1,2,3
  // use this string variable to access the correct action in your results object, use bracket notation
  // display this on the html page

  var firstCard()
