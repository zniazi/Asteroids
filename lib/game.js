(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.allObjects = this.addAsteroids();
    this.allObjects.push(new Asteroids.Ship());
  };

  Game.DIMX = 500;
  Game.DIMY = 500;
  Game.NUM_ASTEROIDS = 5;

  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      asteroids.push(new Asteroids.Asteroid({
        "pos": [Game.prototype.randPos(Game.DIMX),
                Game.prototype.randPos(Game.DIMY)],
        "game": this
      }));
    }

    return asteroids;
  };

  Game.prototype.randPos = function (dim) {
    return Math.random() * dim;
  };

  Game.prototype.moveObjects = function () {
    this.allObjects.forEach(function(object) { object.move(); });
  }

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIMX, Game.DIMY);
    this.allObjects.forEach(function(object) { object.draw(ctx); });
  };

  Game.prototype.wrap = function (pos, radius) {
    var mid_x = Game.DIMX / 2;
    var mid_y = Game.DIMY / 2;

    if (pos[0] <= (-2 * radius)) {
      pos[0] = Game.DIMX + 2 * radius - 1;
      pos[1] = pos[1] >= mid_y ?
        pos[1] - mid_y : pos[1] + mid_y;
    }

    if (pos[1] <= (-2 * radius)) {
      pos[1] = Game.DIMY + 2 * radius - 1;
      pos[0] = pos[0] >= mid_x ?
        pos[0] - mid_x : pos[0] + mid_x;
    }

    if (pos[0] >= Game.DIMX + 2 * radius) {
      pos[0] = 0;
      pos[1] = pos[1] >= mid_y ?
        pos[1] - mid_y : pos[1] + mid_y;
    }

    if (pos[1] >= Game.DIMY + 2 * radius) {
      pos[1] = 0;
      pos[0] = pos[0] >= mid_x ?
        pos[0] - mid_x : pos[0] + mid_x;
    }

    return pos;
  };

  Game.prototype.checkCollisions = function () {
    var game = this;
    this.allObjects.forEach(function(object) {
      game.asteroids.forEach(function(object2) {
        if (object == object2 || (typeof object === "Asteroid" && typeof object2 === "Asteroid")) {
          return;
        } else {
          if (object.isCollidedWith(object2)) {
            game.remove(object);
            game.remove(object2);
          }
        }
      });
    });
  };

  Game.prototype.remove = function (object) {
    var index = this.asteroids.indexOf(object);
    if (index !== -1) {
      this.asteroids.splice(index, 1);
    }
  }

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };
})();






