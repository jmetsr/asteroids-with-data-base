(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(pos, game){
    Asteroids.MovingObject.call(this, pos, Asteroids.Util.randomVec(), Asteroid.RADIUS, Asteroid.COLOR, game, 'http://www.sun.org/uploads/images/Itakawa_asteroid.jpg');
  }
  Asteroid.COLOR = "blue";
  Asteroid.RADIUS = 50;

  Asteroids.Util.inherits(Asteroids.MovingObject,Asteroid);

})();
