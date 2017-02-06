/*
 * Author : Puneet Sharma 
 * Copyright (C) 2017, Stevens Institute of Technology 
 * Created: 2017-02-06 16:35:45 
 */

const fd = require("./fileData");

fd.getFileAsJSON("package.json").then(obj => {
    return fd.saveJSONToFile('test.json', obj);
}).catch(console.error);