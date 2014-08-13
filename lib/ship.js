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
  Ship.ACCEL_CONST = 1;
  Ship.MAX_VELOCITY = 5;

  Asteroids.Util.inherits(Asteroids.MovingObject, Ship);

  Ship.prototype.relocate = function () {
    this.xPos = Asteroids.Game.prototype.randPos(Asteroids.Game.DIMX);
    this.yPos = Asteroids.Game.prototype.randPos(Asteroids.Game.DIMY);
    this.xVel = 0, this.yVel = 0;
  }

  Ship.prototype.power = function (impulse, dir) {
    if (["U", "D"].indexOf(dir) !== -1) {
      if (this.yVel <= Ship.MAX_VELOCITY) {
        if ("D" === dir) this.yVel += impulse;
      }
      if (this.yVel >= -1 * Ship.MAX_VELOCITY) {
        if ("U" === dir) this.yVel += impulse;
      }
    }
    if (["L", "R"].indexOf(dir) !== -1) {
      if (this.xVel <= Ship.MAX_VELOCITY) {
        if ("R" === dir) this.xVel += impulse;
      }
      if (this.xVel >= -1 * Ship.MAX_VELOCITY) {
        if ("L" === dir) this.xVel += impulse;
      }
    }
  }
})();