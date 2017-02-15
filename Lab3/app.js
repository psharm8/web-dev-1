/*
 * Author : Puneet Sharma 
 * Copyright (C) 2017, Stevens Institute of Technology 
 * Created: 2017-02-06 16:35:45 
 */

const fd = require("./fileData");
const metrics = require("./textMetrics");
const path = require("path");
const fs = require("fs");

let checkAndProcess = (file) => {
    return new Promise((fullfil, reject) => {
        if (!fd.isPathValid(file))
            throw "Please provide a valid file path.";
        let ext = path.extname(file);
        let resultFileName = file.replace(ext, ".result.json");
        fs.exists(resultFileName, (exists) => {
            if (exists) {
                fd.getFileAsJSON(resultFileName).then(fullfil, reject);
            } else {
                let contentResult = fd.getFileAsString(file);
                contentResult.then((content) => {
                    let simple = metrics.simplify(content);
                    return fd.saveStringToFile(file.replace(ext, ".debug.txt"), simple)
                        .then((success) => {
                            return simple;
                        });
                }).then((simple) => {
                    let result = metrics.createMetrics(simple);
                    return fd.saveJSONToFile(resultFileName, result).then((success) => {
                        fullfil(result);
                    });
                }).catch(reject);
            }
        });
    });
}

let files = ["chapter1.txt", "chapter2.txt", "chapter3.txt"];

files.forEach((file) => {
    checkAndProcess(file).then((data) => {
        console.log(`Metrics for file ${file}`);
        console.log(JSON.stringify(data, null, 4));
    }).catch((err) => {
        console.error(`Error processing input file ${file}.`);
        console.error(err);
        console.log();
    });
    console.log();
});