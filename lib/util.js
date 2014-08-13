(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Asteroids.Util = function () {};

  Function.prototype.inherits = function (BaseClass) {
    var Surrogate = function () {};
    Surrogate.prototype = BaseClass.prototype;
    this.prototype = new Surrogate();
  };
})();