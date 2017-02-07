/*
 * Author : Puneet Sharma 
 * Copyright (C) 2017, Stevens Institute of Technology 
 * Created: 2017-02-06 17:44:55 
 */

module.exports = {
    simplify: (text) => {
        if (!text || typeof text !== "string") {
            throw "text should be a valid string.";
        }
        return text.replace(/([^\w\s]+)/g, "").replace(/(\s+)/g, " ").toLowerCase();
    },
    createMetrics: (text) => {
        let simple = module.exports.simplify(text);
        let words = simple.trim().split(/\s+/);
        let result = {
            "totalLetters": 0,
            "totalWords": words.length,
            "uniqueWords": 0,
            "longWords": 0,
            "averageWordLength": 0,
            "wordOccurrences": {}
        };
        for (let i = 0; i < words.length; i++) {
            result.totalLetters += words[i].length;
            // Long but may not be unique
            if (words[i].length > 5) {
                result.longWords++;
            }
            if (!result.wordOccurrences[words[i]]) {
                result.wordOccurrences[words[i]] = 1;
                result.uniqueWords++;
            } else {
                result.wordOccurrences[words[i]]++;
            }
        }
        result.averageWordLength = result.totalLetters / result.totalWords;
        return result;
    }
};