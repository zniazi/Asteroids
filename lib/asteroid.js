(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Asteroid = Asteroids.Asteroid = function (params) {
    Asteroids.MovingObject.call(this, {
      "pos": params["pos"],
      "vel": 1,
      "radius": Asteroid.RADIUS,
      "color": Asteroid.COLOR,
      "game": params["game"]
    });
  };

  Asteroid.COLOR = "#0F0120";
  Asteroid.RADIUS = 25;

  Asteroids.Util.inherits(Asteroids.MovingObject, Asteroid);
})();