/** 
 * Author : Puneet Sharma 
 * Copyright (c) 2017, Stevens Institute of Technology 
 * Created: 2017-01-28 16:27:49 
 */

module.exports = {
    triangle: (lines) => {
        if (isNaN(lines) || lines < 1 || parseInt(lines) != lines) {
            throw "Number of lines should be an integer greater than zero.";
        }
        for (let i = 0; i < lines; i++) {
            let leftPad = " ".repeat(lines - i - 1);
            let midPad = " ".repeat(i * 2);
            if (i == lines - 1) {
                midPad = midPad.replace(/\s/g, "-");
            }
            console.log(`${leftPad}/${midPad}\\`);
        }
    },
    square: (lines) => {
        if (isNaN(lines) || lines < 2 || parseInt(lines) != lines) {
            throw "Number of lines should be an integer greater than one.";
        }
        for (let i = 0; i < lines; i++) {

            let midPad = " ".repeat(lines);
            if (i == lines - 1 || i === 0) {
                midPad = midPad.replace(/\s/g, "-");
            }
            console.log(`|${midPad}|`);
        }
    },
    rhombus: (lines) => {
        if (isNaN(lines) || lines < 2 || parseInt(lines) != lines || lines % 2 !== 0) {
            throw "Number of lines should be a non-zero multiple of two.";
        }
        for (let i = 0; i < lines / 2; i++) {
            let leftPad = " ".repeat(lines / 2 - i - 1);
            let midPad = "-";
            if (i > 0) {
                midPad = " ".repeat(2 * i + 1);
            }
            console.log(`${leftPad}/${midPad}\\`);
        }
        for (let i = lines / 2; i > 0; i--) {
            let leftPad = " ".repeat(lines / 2 - i);
            let midPad = "-";
            if (i > 1) {
                midPad = " ".repeat(2 * i - 1);
            }
            console.log(`${leftPad}\\${midPad}/`);
        }
    }
};