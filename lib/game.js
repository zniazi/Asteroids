(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.ship = new Asteroids.Ship({game: this})
    this.asteroids = this.addAsteroids();
    this.allObjects = [this.ship].concat(this.asteroids);
    this.bullets = [];
  };

  Game.DIMX = 500;
  Game.DIMY = 500;
  Game.NUM_ASTEROIDS = 0;

  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      asteroids.push(new Asteroids.Asteroid({
        "pos": [Game.prototype.randPos(Game.DIMX),
                Game.prototype.randPos(Game.DIMY)],
        "game": this,
        "vel": Asteroids.Util.randomVel()
      }));
    }

    return asteroids;
  };

  Game.prototype.add = function(obj) {
    this.allObjects.push(obj);

    if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    } else if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    }
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
      game.allObjects.forEach(function(object2) {
        if (object == object2 || (object instanceof Asteroids.Asteroid && object2 instanceof Asteroids.Asteroid)) {
          return;
        } else {
          if (object.isCollidedWith(object2)) {
          }
        }
      });
    });
  };

  Game.prototype.remove = function (object) {
    var index = this.allObjects.indexOf(object);
    if (index !== -1) {
      this.allObjects.splice(index, 1);
    }
  }

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };
})();






