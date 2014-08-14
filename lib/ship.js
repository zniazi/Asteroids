(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Ship = Asteroids.Ship = function (params) {
    this.xDir = 0;
    this.yDir = -1;
    this.vel = 0;
    Asteroids.MovingObject.call(this, {
      "pos": [Asteroids.Game.prototype.randPos(Asteroids.Game.DIMX),
              Asteroids.Game.prototype.randPos(Asteroids.Game.DIMY)],
      "radius": Ship.RADIUS,
      "color": Ship.COLOR,
      "game": params["game"]
    });
  }

  Ship.RADIUS = 15;
  Ship.COLOR = "#E64402";
  Ship.ACCEL_CONST = 1;
  Ship.MAX_VELOCITY = 5;
  Ship.ANGLE_STEP = (Math.PI * 2) / 180;

  Asteroids.Util.inherits(Asteroids.MovingObject, Ship);

  Ship.prototype.relocate = function () {
    this.xPos = Asteroids.Game.prototype.randPos(Asteroids.Game.DIMX);
    this.yPos = Asteroids.Game.prototype.randPos(Asteroids.Game.DIMY);
    this.vel = 0;
  }

  Ship.prototype.power = function () {
    this.vel += Ship.ACCEL_CONST;
  };

  Ship.prototype.changeDir = function (option) {
    var norm = Math.sqrt((Math.pow(this.xPos, 2) + Math.pow(this.yPos, 2)));
    if (["L", "R"].indexOf(option) !== -1) {
      if (option === "L") {
        if (this.xDir >= -1 && this.xDir <= 0 && this.yDir <= 0 && this.yDir >= -1) {
          this.xDir = this.xDir < -1 ? this.xDir + Ship.ANGLE_STEP : this.xDir - Ship.ANGLE_STEP;
          this.yDir += Ship.ANGLE_STEP;
        } else if (this.xDir >= -1 && this.xDir <= 0 && this.yDir >= 0 && this.yDir <= 1) {
          this.xDir = this.xDir > 0 ? 0 : this.xDir + Ship.ANGLE_STEP;
          this.yDir = this.yDir > 1 ? 1 : this.yDir + Ship.ANGLE_STEP;
        } else if (this.xDir >= 0 && this.xDir <= 1 && this.yDir >= 0 && this.yDir <= 1) {
          this.xDir = this.xDir > 1 ? 1 : this.xDir + Ship.ANGLE_STEP;
          this.yDir = this.yDir < 0 ? 0 : this.yDir - Ship.ANGLE_STEP;
        } else if (this.xDir >= 0 && this.xDir <= 1 && this.yDir >= -1 && this.yDir <= 0) {
          this.xDir = this.xDir < 0 ? 0 : this.xDir - Ship.ANGLE_STEP;
          this.yDir = this.yDir < -1 ? -1 : this.yDir - Ship.ANGLE_STEP;
        }
      }
      if (this.xDir < -1) this.xDir = -1;
      if (this.xDir > 1) this.xDir = 1;
      if (this.yDir < -1) this.yDir = -1;
      if (this.yDir > 1) this.yDir = 1;
    }
  }

  Ship.prototype.fireBullet = function () {
    var bullet = new Asteroids.Bullet({
      "pos": [this.xPos, this.yPos],
      "xDir": this.xDir,
      "yDir": this.yDir,
      "vel": Asteroids.Bullet.VELOCITY,
      "game": this.game
    });

    this.game.add(bullet);
  }

  Ship.prototype.move = function () {
    this.xPos += this.xDir * this.vel;
    this.yPos += this.yDir * this.vel;
    var wrapPos = this.game.wrap(
      [this.xPos, this.yPos], this.radius
    );
    this.xPos = wrapPos[0];
    this.yPos = wrapPos[1];
  }

  Ship.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.beginPath();
        ctx.moveTo(this.xPos,this.yPos);
        ctx.lineTo(this.xPos+25,this.yPos+25);
        ctx.lineTo(this.xPos+25,this.yPos-25);
        ctx.fill();
  };

})();








