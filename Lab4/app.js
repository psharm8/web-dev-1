/*
 * Author : Puneet Sharma 
 * Copyright (c) 2017, Stevens Institute of Technology 
 * Created: 2017-02-15
 */

const todoItems = require("./todo");
const connection = require("./mongoConnection");

function completeMany(ids) {
    return new Promise((resolve, reject) => {
        if (ids.length > 0) {
            let id = ids[0];
            ids.splice(0, 1);
            return completeMany(ids)
                .then(info => {
                        return todoItems.completeTask(id)
                            .then(t => {
                                    info.push(t);
                                    return resolve(info);
                                },
                                reject);
                    },
                    reject);
        }
        return resolve([]);
    });
}

let task = todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");

let firstTask = undefined;

task.then((t) => {
        console.log("Task created:");
        firstTask = t;
        console.log(JSON.stringify(t, null, 4));
    })
    .then(() => {
        console.log("Second task created:");
        return todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
    })
    .then(() => {
        return todoItems.getAllTasks();
    })
    .then(allTasks => {
        console.log("All Tasks:");
        console.log(JSON.stringify(allTasks, null, 4));
    })
    .then(() => {
        console.log("Remove first task:");
        return todoItems.removeTask(firstTask._id);
    })
    .then(() => {
        return todoItems.getAllTasks();
    })
    .then(allTasks => {
        console.log("All Tasks:");
        console.log(JSON.stringify(allTasks, null, 4));
        return allTasks;
    })
    .then(allTasks => {
        console.log("Recursive complete tasks.");
        return completeMany(allTasks.map(t => t._id));
    })
    .then(() => {
        return todoItems.getAllTasks();
    })
    .then(allTasks => {
        console.log("All Tasks:");
        console.log(JSON.stringify(allTasks, null, 4));
        return allTasks;
    })
    .catch((e) => {
        console.error(e);
    })
    .then(() => {
        return connection();
    }).then(db => {
        db.close();
    });