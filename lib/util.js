(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Util = Asteroids.Util = {};

  Util.inherits = function (BaseClass, SubClass) {
    var Surrogate = function () {};
    Surrogate.prototype = BaseClass.prototype;
    SubClass.prototype = new Surrogate();
  };

  Util.randomVel = function () {
    return (Math.random() - Math.random()) * 5
  }
})();