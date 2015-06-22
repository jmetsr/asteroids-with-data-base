(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(pos, game){
    Asteroids.MovingObject.call(this, pos, Asteroids.Util.randomVec(), Asteroid.RADIUS, Asteroid.COLOR, game, 'http://www.macupdate.com/images/icons256/48979.png');
  }
  Asteroid.COLOR = "blue";
  Asteroid.RADIUS = 50;

  Asteroids.Util.inherits(Asteroids.MovingObject,Asteroid);

})();
