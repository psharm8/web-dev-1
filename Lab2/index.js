/*
 * Author : Puneet Sharma 
 * Copyright (c) 2017, Stevens Institute of Technology 
 * Created: 2017-01-28 17:51:32 
 */

const shape = require("./printShape");

console.log("Triangles");
try {
    shape.triangle(0);
} catch (error) {
    console.log();
    console.log("lines: 0");
    console.log(error);
}

for (let i = 1; i < 11; i++) {
    console.log();
    console.log(`lines: ${i}`);
    shape.triangle(i);
}
console.log();

console.log("Squares");
try {
    shape.square(1);
} catch (error) {
    console.log();
    console.log("lines: 1");
    console.log(error);
}

for (let i = 2; i < 12; i++) {
    console.log();
    console.log(`lines: ${i}`);
    shape.square(i);
}
console.log();

console.log("Rhombi");
try {
    shape.rhombus(1);
} catch (error) {
    console.log();
    console.log("lines: 1");
    console.log(error);
}

for (let i = 2; i < 21; i += 2) {
    console.log();
    console.log(`lines: ${i}`);
    shape.rhombus(i);
}