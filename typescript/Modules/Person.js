"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClothesSize;
(function (ClothesSize) {
    ClothesSize["xs"] = "1";
    ClothesSize["xl"] = "2";
    ClothesSize["xxl"] = "3";
})(ClothesSize || (ClothesSize = {}));
exports.height = 187;
const isActive = true;
const username = "Joe";
const sym = Symbol("1");
class Person {
    constructor() {
        this.name = {
            firstName: "John",
            lastName: "Doe"
        };
        this.weight = 80;
    }
    get _weight() {
        return this.weight;
    }
    setName(name) {
        this.name = name;
    }
    walk() {
        console.log("Walking");
    }
}
let jimmy = new Person();
jimmy.setName({ firstName: "Barbara", lastName: "Cohen" });
exports.default = Person;
