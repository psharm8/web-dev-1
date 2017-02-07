/*
 * Author : Puneet Sharma 
 * Copyright (C) 2017, Stevens Institute of Technology 
 * Created: 2017-02-06 16:03:51 
 */
const fs = require('fs');

module.exports = {
    getFileAsString: (path) => {
        return new Promise((fulfill, reject) => {
            if (!module.exports.isPathValid(path)) throw "Please provide a valid file path.";
            fs.readFile(path, "utf-8", (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                fulfill(data);
            });
        });
    },
    getFileAsJSON: (path) => {
        return new Promise((fulfill, reject) => {
            let stringFileResult = module.exports.getFileAsString(path);
            stringFileResult.then((data) => {
                try {
                    let jsonData = JSON.parse(data);
                    fulfill(jsonData);
                } catch (parsingError) {
                    reject(parsingError);
                }
            }, reject);
        });
    },
    saveStringToFile: (path, text) => {
        return new Promise((fulfill, reject) => {
            if (!module.exports.isPathValid(path)) throw "Please provide a valid file path.";
            fs.writeFile(path, text, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                fulfill(true);
            });
        });
    },
    saveJSONToFile: (path, obj) => {
        return new Promise((fulfill, reject) => {
            if (typeof obj !== "object") {
                throw "obj should be of type \"object\".";
            }
            let data = JSON.stringify(obj, null, 4);
            let saveResult = module.exports.saveStringToFile(path, data);
            saveResult.then(fulfill, reject);
        });
    },
    isPathValid: (filePath) => {
        return filePath && typeof filePath === "string" && filePath.length > 0;
    }
};