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
    key('up', function() { game.ship.power() });
    key('left', function() { game.ship.changeDir("L") });
    key('right', function() { game.ship.changeDir("R") });
    key('space', function() { game.ship.fireBullet() });

    setInterval(function () {
      this.game.step();
      this.game.draw(this.ctx);
    }, 20);
  }
})();