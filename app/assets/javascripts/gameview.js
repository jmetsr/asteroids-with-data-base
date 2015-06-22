(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(){
    this.game = new Asteroids.game();
    this.paused = true;
    this.scores = [];
  }

  game_view = new GameView();
  GameView.prototype.start = function(){
    window.scoress = [];
    var that = this;
    game_view.bindKeyHandlers();
    setInterval(function() {
    game_view.game.draw(c);
     if (!that.pauss()){
       game_view.game.step();
     }
   }, 20)
  }

  GameView.prototype.pauss = function(){
    return this.paused;
  }

  GameView.prototype.bindKeyHandlers = function(){
    var that = this;
    key('left', function(){
      game_view.game.ship.power([-1,0]);
    });
    key('up', function(){
      game_view.game.ship.power([0,-1]);
    });
    key('right', function(){
      game_view.game.ship.power([1,0]);
    });
    key('down', function(){
      game_view.game.ship.power([0,1]);
    });
    key('v',function(){
        if (that.paused){
          that.paused = false;
          $("#instructions").addClass('hidden')
          $("#save").addClass('hidden')
          $("#highscores").addClass('hidden')
          $("#scores").addClass('hidden')

 
        } else { 
          that.paused = true;
          $("#instructions").removeClass('hidden')
          $("#save").removeClass('hidden')
          $("#highscores").removeClass('hidden')
          $("#scores").removeClass('hidden')
          $("#title").addClass('hidden')
          $("#youlose").addClass('hidden')
           $('#paused').removeClass('hidden')
        }
    });
  }

  game_view.start();

})();
