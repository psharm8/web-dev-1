/*
 * @Author : Puneet Sharma 
 * @Copyright (c) 2017, Stevens Institute of Technology 
 * @Created: 2017-03-04
 */

const express = require("express");
const bodyParser = require("body-parser");
let app = express();
let configRoutes = require("./routes");

app.use(bodyParser.json());
configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
