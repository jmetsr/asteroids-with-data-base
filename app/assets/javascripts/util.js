(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  if (typeof Asteroids.Util === "undefined"){
    window.Asteroids.Util = {};
  }

  Asteroids.Util.inherits = function (BaseClass,childclass) {
    function Surrogate () {};
    Surrogate.prototype = BaseClass.prototype;
    childclass.prototype = new Surrogate();
  };

  Asteroids.Util.randomVec = function(){
    return [10*(Math.random()) - 5, 10*(Math.random()) - 5];
  };

})();
