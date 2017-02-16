/*
 * Author : Puneet Sharma 
 * Copyright (c) 2017, Stevens Institute of Technology 
 * Created: 2017-02-15
 */

const mongoClient = require("mongodb").MongoClient;

const settings = {
    mongoConfig: {
        serverUrl: "mongodb://localhost:27017/",
        database: "lab4"
    }
};

let url = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
let connection = undefined;

let connectDb = () => {
    if (!connection) {
        connection = mongoClient.connect(url)
            .then((db) => {
                return db;
            });
    }
    return connection;
};

module.exports = connectDb;