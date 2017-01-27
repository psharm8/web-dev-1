/**
 * Author : Puneet Sharma
 * Copyright (C) 2017, Stevens Institute of Technology
 * Created : 27-01-2017
 */
function triangle(lines) {
    if (isNaN(lines) || lines < 1 || parseInt(lines) != lines) {
        throw "Number of cups should be an integer greater than one.";
    }
    for (let i = 0; i < lines; i++) {
        let leftPad = " ".repeat(lines - i - 1);
        let midPad = " ".repeat(i * 2);
        if (i == lines - 1) {
            midPad = midPad.replace(/\s/g, "-");
        }
        console.log(leftPad + "/" + midPad + "\\");
    }
}

triangle(1);
console.log();
triangle(2);
console.log();
triangle(3);
console.log();
triangle(4);
console.log();