var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.getCoordinates = function () {
        console.log("The coordinates are 7,49");
    };
    SmartPhone.prototype.start = function () {
        console.log("Music has started");
    };
    SmartPhone.prototype.stop = function () {
        console.log("Music has stopped");
    };
    SmartPhone.prototype.pause = function () {
        console.log("Music has paused");
    };
    return SmartPhone;
}());
var myPhone = new SmartPhone();
myPhone.getCoordinates();
myPhone.start();
myPhone.pause();
myPhone.stop();