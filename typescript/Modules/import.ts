import { x } from './newModule/newModule2';
import { obj, obj2 } from './export';
import Person, { height } from './Person';

let man = new Person();
man.walk();

console.log("obj", obj);
console.log("x", x);