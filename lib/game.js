(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Game.DIMX = 500;
  Game.DIMY = 500;
  Game.NUM_ASTEROIDS = 10;

  Game = Asteroids.Game = function () {
    this.asteroids = this.addAsteroids();
  };

  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      asteroids.push(new Asteroids.Asteroid({
        "pos": [Game.randPos(Game.DIMX), Game.randPos(Game.DIMY)]
      }));
    }

    return asteroids;
  };

  Game.prototype.randPos = function (dim) {
    return Math.rand() * dim;
  };
})();