/*
 * Author : Puneet Sharma 
 * Copyright (c) 2017, Stevens Institute of Technology 
 * Created: 2017-02-15
 */

const connection = require("./mongoConnection");

let getCollection = (collection) => {
    let col = undefined;

    return () => {
        if (!col) {
            col = connection()
                .then(db => {
                    return db.collection(collection);
                });
        }
        return col;
    };
};

module.exports = {
	todo: getCollection("todoItems")
};