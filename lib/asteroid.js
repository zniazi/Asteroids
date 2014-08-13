(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  if (typeof Asteroids.Util === "undefined") {
    new Asteroids.Util();
  }

  Asteroid.COLOR = "#0F0120";
  Asteroid.RADIUS = 100;

  var Asteroid = Asteroids.Asteroid = function (params) {
    MovingObject({"pos": params["pos"], "vel": 50,
      "radius": Asteroid.RADIUS, "color": Asteroid.COLOR});
  }


  Asteroid.inherits(MovingObject);
})();