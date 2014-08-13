(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Ship = Asteroids.Ship = function (params) {
    Asteroids.MovingObject.call(this, {
      "pos": [Asteroids.Game.prototype.randPos(Asteroids.Game.DIMX),
              Asteroids.Game.prototype.randPos(Asteroids.Game.DIMY)],
      "vel": [0, 0],
      "radius": Ship.RADIUS,
      "color": Ship.COLOR,
      "game": params["game"]
    });
  }

  Ship.RADIUS = 15;
  Ship.COLOR = "#E64402";

  Asteroids.Util.inherits(Asteroids.MovingObject, Ship);

  Ship.prototype.relocate = function () {
    this.xPos = Asteroids.Game.prototype.randPos(Asteroids.Game.DIMX);
    this.yPos = Asteroids.Game.prototype.randPos(Asteroids.Game.DIMY);
    this.xVel = 0, this.yVel = 0;
  }
})();