(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var MovingObject = Asteroids.MovingObject = function (params) {
    var xPos = params["pos"][0];
    var yPos = params["pos"][1];
    var vel = params["vel"];
    var radius = params["radius"];
    var color = params["color"];
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.xPos,
      this.yPos,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

})()