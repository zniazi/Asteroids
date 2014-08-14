(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Bullet = Asteroids.Bullet = function (params) {
    Asteroids.MovingObject.call(this, {
      "pos": params["pos"],
      "vel": params["vel"],
      "radius": Bullet.RADIUS,
      "color": Bullet.COLOR,
      "game": params["game"]
    });
  };

  Bullet.RADIUS = 3;
  Bullet.COLOR = "#000000";
  Bullet.VELOCITY = 10;

  Asteroids.Util.inherits(Asteroids.MovingObject, Bullet);

  Bullet.prototype.isCollidedWith = function (otherObject) {
    if (Asteroids.Util.distance(this, otherObject) < this.radius + otherObject.radius) {
      if (otherObject instanceof Asteroids.Asteroid) {
        this.game.remove(otherObject);
        this.game.remove(this);
      }
      return true;
    } else {
      return false;
    }
  };

  Bullet.prototype.move = function () {
    this.xPos += this.xVel;
    this.yPos += this.yVel;
    if (this.xPos >= this.game.DIMX || this.yPos >= this.game.DIMY) {
      this.game.remove(this);
    }
  };

})();