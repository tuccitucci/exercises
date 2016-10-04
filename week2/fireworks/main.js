function launchRocket() {
    console.log("Launch Rocket called");

      var rocket = document.createElement('div');
      rocket.style.left   = random(0,100)+"vw";
      rocket.style.bottom = "0vh";
      rocket.style.width = "40px";
      rocket.style.height = "200px";
      rocket.style.backgroundColor = "black";

      document.body.appendChild(rocket);

      var ID = setInterval(function()  {
        launch (rocket, ID)
      }, 100);
}

function launch(rocket) {
      var currentLeft = rocket.style.left.slice(0,-2)*1;
      var currentBottom = rocket.style.bottom.slice(0,-2)*1;
      rocket.style.left   = (++currentLeft)+"vw";
      rocket.style.bottom = (++currentBottom)+"vh";

      if ( currentBottom > 90 ) {
        console.log('Need to do some shit here');
        clearInterval(ID);
        explode(rocket);
      }
}

function explode(currentRocket) {
    var numParticles = random(1,0);
    var particles;

    for (var i=0; i < numParticles; i++)  {
    particle = document.createElement('p');
    particle.style.left = currentRocket.style.left;
    particle.style.bottom = currentRocket.style.bottom;
    var fizzleID = setInterval(function() {
      particle.counter = 0;
      fizzle(particle, fizzleID);
    }, 100);
  }
}

function fizzle(currentParticle) {
  var currentLeft = currentParticle.style.left.slice(0,-2)*1;
  var currentBottom = currentParticle.style.bottom.slice(0,-2)*1;


  particle.style.left   = currentLeft += (random( random(-10,10), random(-10,10) );+"vw";
  particle.style.bottom = currentBottom += (random( random(-10,10), random(-10,10) );+"vh";

  particle.counter++;

  if( particle.counter >= 20 ) {
    clearInterval(intervalID);
  }
}

function random(min,max) {
      return Math.random() * (max - min) + min;
}
