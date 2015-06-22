(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Gun = Asteroids.Gun = function(pos,game){
    Asteroids.MovingObject.call(this, [100,100], [0,0], Gun.RADIUS, Gun.COLOR, game, 'http://img13.deviantart.net/95db/i/2012/170/3/b/l85a1_assault_rifle_by_skorpion66-d541glu.png');
  }
  Gun.RADIUS = 80;
  Gun.COLOR = "green";
  Asteroids.Util.inherits(Asteroids.MovingObject,Gun);

})()
