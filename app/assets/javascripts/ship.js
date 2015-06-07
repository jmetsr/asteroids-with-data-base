(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(pos,game){
    Asteroids.MovingObject.call(this, pos, [0,0], Ship.RADIUS, Ship.COLOR, game, 'https://s-media-cache-ak0.pinimg.com/736x/bc/d0/e0/bcd0e08b54d2e6fa8ec11cb4523fb50a.jpg');
  }

  Ship.RADIUS = 10;
  Ship.COLOR = "red";
  Asteroids.Util.inherits(Asteroids.MovingObject,Ship);
  Ship.prototype.relocate = function(){
    this.pos = this.game.randomPosition();
    this.vel = [0,0];

    var ul = document.getElementById("scorelist");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(window.scoress.length+1 +") " +this.game.points));
    ul.appendChild(li);



    window.scoress.push(this.game.points)
    this.game.points = 0;
  }
  Ship.prototype.power = function(impulse){
    this.vel = impulse;
  }
  Ship.prototype.fireBullet = function(){
    if ((this.direction()[0] !== 0) || (this.direction()[1] !== 0)){
      var bullet = new Asteroids.Bullet(this.pos.slice(), this.direction().slice(), this.game)
      this.game.bullets.push(bullet);
    }
  }
  Ship.prototype.direction = function(){
    var dir = this.vel.slice();
    var xDir = this.scale(dir[0]);
    var yDir = this.scale(dir[1]);
    return [xDir, yDir];
  }
  Ship.prototype.scale = function(number){
    if (number === 0){
      return 0;
    }
    if (number > 0){
      return 1;
    }
    if (number < 0){
      return -1;
    }
  }
})();
