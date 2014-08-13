(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var game = this.game
    key('up', function() { game.ship.power([-1, 0], "U") });
    key('down', function() { game.ship.power([1, 0], "D") });
    key('left', function() { game.ship.power([0, -1], "L") });
    key('right', function() { game.ship.power([0, 1], "R") });

    setInterval(function () {
      this.game.step();
      this.game.draw(this.ctx);
    }, 20);
  }
})();