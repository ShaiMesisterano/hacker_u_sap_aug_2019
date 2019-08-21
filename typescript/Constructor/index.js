"use strict";
var ClothesSize;
(function (ClothesSize) {
    ClothesSize["xs"] = "1";
    ClothesSize["xl"] = "2";
    ClothesSize["xxl"] = "3";
})(ClothesSize || (ClothesSize = {}));
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.walk = function () {
        console.log("Walking");
    };
    return Person;
}());
var shai = new Person();
shai.walk();
