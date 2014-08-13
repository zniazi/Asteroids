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
  };

  Util.distance = function (obj1, obj2) {
    var x1 = obj1.xPos;
    var y1 = obj1.yPos;
    var x2 = obj2.xPos;
    var y2 = obj2.yPos;

    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  };

})();