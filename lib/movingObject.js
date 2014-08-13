(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var MovingObject = Asteroids.MovingObject = function (params) {
    this.xPos = params["pos"][0];
    this.yPos = params["pos"][1];
    this.vel = params["vel"];
    this.radius = params["radius"];
    this.color = params["color"];
    this.game = params["game"];
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.xPos - this.radius,
      this.yPos - this.radius,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.xPos += this.vel;
    this.yPos += this.vel;
    var wrapPos = this.game.wrap(
      [this.xPos, this.yPos], this.radius
    );
    this.xPos = wrapPos[0];
    this.yPos = wrapPos[1];
  }
})();