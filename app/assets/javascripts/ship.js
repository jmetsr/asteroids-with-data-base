(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(pos,game){
    Asteroids.MovingObject.call(this, pos, [0,0], Ship.RADIUS, Ship.COLOR, game);
  }

  Ship.RADIUS = 10;
  Ship.COLOR = "red";
  Asteroids.Util.inherits(Asteroids.MovingObject,Ship);
  Ship.prototype.relocate = function(){
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
    $('#scores').append(this.game.points+ " ")
    this.game.points = 0;
  }
  Ship.prototype.power = function(impulse){
    this.vel = impulse;
  }
})();
