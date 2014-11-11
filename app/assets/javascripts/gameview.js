(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(){
    this.game = new Asteroids.game();
   // this.game.moveObjects();
  //  this.game.draw(c);
  }

  game_view = new GameView();
  GameView.prototype.start = function(){
      game_view.bindKeyHandlers();
   setInterval(function() {
      // game_view.game.checkCollisions();
      game_view.game.step();
      game_view.game.draw(c); }, 20)

  }

  GameView.prototype.bindKeyHandlers = function(){
    key('left', function(){
      game_view.game.ship.power([-7,0]);
    });
    key('up', function(){
      game_view.game.ship.power([0,-7]);
    });
    key('right', function(){
      game_view.game.ship.power([7,0]);
    });
    key('down', function(){
      game_view.game.ship.power([0,7]);
    });
  }
  game_view.start();

})();
