(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  var Game = Asteroids.game = function (){
    this.asteroidArr = [];
    this.bullets = [];
    this.points = 0;
    this.addAsteroids();
    this.ship = new Asteroids.Ship(this.randomPosition(),this);
  }

  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.NUM_ASTEROIDS = 4;
  Game.prototype.dim_x = function(){
    return Game.DIM_X
  }
  Game.prototype.dim_y = function(){
    return Game.DIM_Y
  }

  Game.prototype.addAsteroids = function (){
    while (this.asteroidArr.length < Game.NUM_ASTEROIDS) {
      this.asteroidArr.push(new Asteroids.Asteroid(this.randomPosition(),this))
    }
    this.hasGun = false;
    this.gun = new Asteroids.Gun([100,100],this);
    this.guns = [this.gun];
    this.level = Game.NUM_ASTEROIDS/2-1;
    //this.block = new Asteroids.Block([200,200],this);
    //this.blocks = [this.block];
  }

  Game.prototype.draw = function(c){
    c.clearRect(0,0,Game.DIM_X,Game.DIM_Y);

    for (var i = 0; i < this.allObjects().length;i++){
      this.allObjects()[i].draw(c);
    }
  }

  Game.prototype.randomPosition = function (){
    return [Math.random() * 500, Math.random() * 500];
  }

  Game.prototype.moveObjects = function (){
    for (var i = 0; i < this.allObjects().length;i++){
      this.allObjects()[i].move();
    }
  }

  Game.prototype.wrap = function (pos) {
    if (pos[0] > Game.DIM_X) {
      pos[0] -= Game.DIM_X;
    }
    else if (pos[0] < 0){
      pos[0] += Game.DIM_X;
    }

    if (pos[1] > Game.DIM_Y) {
      pos[1] -= Game.DIM_Y;
    }
    else if (pos[1] < 0){
      pos[1] += Game.DIM_Y;
    }
  };

  Game.prototype.checkCollisions = function(){
    for (var i=0; i < this.allObjects().length-1; i++){
      for (var j=i+1; j < this.allObjects().length; j++){
        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])){
          this.allObjects()[i].collideWith(this.allObjects()[j]);
        }
      }
    }
  }

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
    this.points += 1;
    $('#points').html(this.points + " points");
    $('#level').html("level " + this.level);
    if (this.hasGun){
      this.ship.fireBullet();
    }
  }

  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroids.Asteroid){
      this.points += 1000;
      var index = this.asteroidArr.indexOf(obj);
      this.asteroidArr.splice(index, 1);
      if (this.asteroidArr.length == 0){
        Game.NUM_ASTEROIDS += 2;
        this.addAsteroids();
      }
    }
    if (obj instanceof Asteroids.Bullet) {
      var index = this.bullets.indexOf(obj);
      this.bullets.splice(index, 1);
    }
    if (obj instanceof Asteroids.Gun) {
      this.gun = null;
    }
  }

   Game.prototype.allObjects = function() {
  //   return [this.ship].concat(this.asteroidArr).concat(this.bullets).concat(this.guns).concat(this.blocks);
    return [this.ship].concat(this.asteroidArr).concat(this.bullets).concat(this.guns);
   }
})();
