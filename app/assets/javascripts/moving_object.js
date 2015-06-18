(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(pos,vel,radius,color, game, img){
    this.pos = pos;
    this.vel = [vel[0]/2,vel[1]/2];
    this.radius = radius;
    this.color = color;
    this.game = game;
    this.img = img
    
  }

  MovingObject.prototype.draw = function (c) {

    if (this.img != undefined){

      var imageObj = new Image();
      imageObj.src = this.img
      var that = this
    
      c.drawImage(imageObj, this.pos[0], this.pos[1], this.radius, this.radius);
    } else {
       c.fillStyle = this.color;
       c.beginPath();
       c.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI)
       c.fill();
    }
  }

  

  MovingObject.prototype.move = function(){
    if (!(this instanceof Asteroids.Bullet)){
      this.game.wrap(this.pos);
    }
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  MovingObject.prototype.isCollidedWith = function(otherObject){
    if (!(otherObject instanceof Asteroids.Block)){
      //var distance = Math.pow(Math.pow((this.pos[0]-otherObject.pos[0]),2) + Math.pow((this.pos[1]-otherObject.pos[1]),2), 0.5);
      // if (distance < this.radius + otherObject.radius){
      //   return true;
      // }
      // else{
      //   return false;
      // }
      var inBoundX1 = this.pos[0] < otherObject.pos[0] + otherObject.radius
      var inBoundX2 = this.pos[0] + this.radius > otherObject.pos[0]
      var inBoundY1 = this.pos[1] < otherObject.pos[1] + otherObject.radius
      var inBoundY2 = this.pos[1] + this.radius > otherObject.pos[1]
      return inBoundX1 && inBoundX2 && inBoundY1 && inBoundY2

    } else {
      var inTop = this.pos[1] - this.radius < otherObject.pos[1] + otherObject.radius*2;
      var inBottom = this.pos[1] + this.radius > otherObject.pos[1];
      var inLeft = this.pos[0] - this.radius < otherObject.pos[0] + otherObject.radius*2;
      var inRight = this.pos[0] + this.radius > otherObject.pos[0];
      return inTop && inLeft && inBottom && inRight;
    }

  }

  MovingObject.prototype.collideWith = function(otherObject) {
    if (this instanceof Asteroids.Ship && otherObject instanceof Asteroids.Asteroid){
      if (!this.immune){
        this.relocate();
        Asteroids.game.call(this.game) //This resets the game
        game_view.paused = true
        $("#instructions").removeClass('hidden')
        $("#save").removeClass('hidden')
        $("#highscores").removeClass('hidden')
        $("#scores").removeClass('hidden')
        $('#title').addClass('hidden')
        $('#youlose').removeClass('hidden')
        $('#paused').addClass('hidden')
      

      }
    }
    if (this instanceof Asteroids.Asteroid && otherObject instanceof Asteroids.Bullet){
      this.game.remove(this);
    }
    if (this instanceof Asteroids.Ship && otherObject instanceof Asteroids.Gun){
      this.game.hasGun = true;
      this.game.guns = [];
    }
    if (otherObject instanceof Asteroids.Block){
      this.reverseDirection();
    }
  }
  MovingObject.prototype.isOutOfBounds = function(){
    pos = this.pos
    if (pos[0] > this.game.dim_x() || pos[0] < 0) {
      return true;
    }
    if (pos[1] > this.game.dim_y() || pos[1] < 0) {
      return true;
    }
    return false
  }
  MovingObject.prototype.reverseDirection = function(){
    this.vel[0] = this.vel[0]*-1;
    this.vel[1] = this.vel[1]*-1
  }

})();
