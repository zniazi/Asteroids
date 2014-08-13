(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Asteroid = Asteroids.Asteroid = function (params) {
    Asteroids.MovingObject.call(this, {
      "pos": params["pos"],
      "vel": [Asteroids.Util.randomVel(), Asteroids.Util.randomVel()],
      "radius": Asteroid.RADIUS,
      "color": Asteroid.COLOR,
      "game": params["game"]
    });
  };

  Asteroids.Util.inherits(Asteroids.MovingObject, Asteroid);

  Asteroid.COLOR = "#0F0120";
  Asteroid.RADIUS = 25;

  Asteroid.prototype.isCollidedWith = function (otherObject) {
    if (Asteroids.Util.distance(this, otherObject) < this.radius + otherObject.radius) {
      if (otherObject instanceof Asteroids.Ship) {
        otherObject.relocate();
        this.game.remove(this);
      }
      return true;
    } else {
      return false;
    }
  }
})();