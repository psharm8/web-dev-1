/**
 * Author : Puneet Sharma
 * Copyright (C) 2017, Stevens Institute of Technology
 * Created : 20-01-2017
 */

function sumOfSquares(num1, num2, num3) {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        throw "Only numbers are expected as arguments to this function."
    }
    return num1 * num1 + num2 * num2 + num3 * num3;
}

function sayHelloTo(firstName, lastName, title) {
    if (firstName == undefined || firstName.length==0) {
        throw "firstName is required.";
    }
    if (lastName == undefined || lastName.length == 0) {
        console.log("Hello, " + firstName + "!");
    } else if (title == undefined || title.length == 0) {
        console.log("Hello, " + firstName + " " + lastName + ". I hope you are having a good day!");
    } else {
        console.log("Hello, " + title + " " + firstName + " " + lastName + "! Have a good evening!");
    }
}

function cupsOfCoffee(numberOfCups) {
    if (isNaN(numberOfCups) || numberOfCups < 1 || parseInt(numberOfCups) != numberOfCups) {
        throw "Number of cups should be an integer greater than one.";
    }
    let getGrammer = (x) => {
        if (x > 1) {
            return x + " cups of coffee";
        }
        if (x == 1) {
            return "1 cup of coffee";
        }
        if (x == 0) {
            return "no more coffee left";
        }
    };
    for (let cups = numberOfCups; cups > 0; cups--) {
        let before = getGrammer(cups);
        let after = getGrammer(cups - 1);
        let line1 = before + " on the desk! " + before + "!";
        let line2 = "Pick " + (cups > 1 ? "one" : "it") + " up, drink the cup, " + after + " on the desk!";
        console.log(line1);
        console.log(line2);
        console.log();
    }
}

function occurrencesOfSubstring(fullString, substring) {
    if (substring == undefined || substring.length == 0) {
        throw "substring must be at-least one character long."
    }
    if (fullString == undefined || fullString.length < substring.length) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < fullString.length - substring.length + 1; i++) {
        if (fullString.substring(i, i + substring.length) == substring) {
            count++;
        }
    }
    return count;
}

// This function has been taken from Mozilla Developer Network.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomizeSentences(paragraph) {
    if (paragraph == undefined || paragraph.length == 0) {
        throw "paragraph should be a non-empty string."
    }
    let splits = paragraph.replace(/([\.!\?])\s+/g, (sub) => {
        return sub.trim() + "#";
    }).split("#");
    let usedIndices = [];
    let randomParagraph="";
    for (let i = 0; i < splits.length; i++) {
        let rnd = getRandomInt(0, splits.length);
        while (usedIndices.includes(rnd)) {
            rnd = getRandomInt(0, splits.length);
        }
        randomParagraph = randomParagraph + splits[rnd] + " ";
        usedIndices.push(rnd);
    }
    return randomParagraph.trim();
}

console.log("sumOfSquares: 5 3 10");
console.log(sumOfSquares(5, 3, 10));
console.log();

console.log("sayHelloTo:");
try {
    sayHelloTo();
} catch (e) {
    console.error("Error: " + e);
}
sayHelloTo("Phil");
sayHelloTo("Phil", "Barresi");
sayHelloTo("Phil", "Barresi", "Mr.");

console.log();
console.log("cupsOfCoffee:");
cupsOfCoffee(5);

console.log();
console.log("occurrencesOfSubstring:");
console.log(occurrencesOfSubstring("hello world", "o"));
console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));

console.log();
console.log("randomizeSentences:");
var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
console.log(randomizeSentences(paragraph));