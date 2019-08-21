"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newModule2_1 = require("./newModule/newModule2");
const export_1 = require("./export");
const Person_1 = __importDefault(require("./Person"));
let man = new Person_1.default();
man.walk();
console.log("obj", export_1.obj);
console.log("x", newModule2_1.x);
