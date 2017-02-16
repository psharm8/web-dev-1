/*
 * Author : Puneet Sharma 
 * Copyright (c) 2017, Stevens Institute of Technology 
 * Created: 2017-02-15
 */

const collections = require("./mongoCollections");
const uuid = require("uuid");
const todo = collections.todo;

let exported = {
    getTask(id) {
        if (!id) {
            return Promise.reject("You must provide an id to search.");
        }

        return todo().then((collection) => {
            return collection.findOne({ _id: id });
        });
    },
    createTask(title, description) {
        if (!title) {
            return Promise.reject("You must provide a title for the task.");
        }
        if (!description) {
            return Promise.reject("You must provide a description for the task.");
        }

        return todo().then((collection) => {
            let newTask = {
                _id: uuid.v4(),
                title: title,
                description: description,
                completed: false,
                completedAt: null
            };
            return collection
                .insertOne(newTask)
                .then((insertInfo) => {
                    return insertInfo.insertedId;
                })
                .then((id) => {
                    return this.getTask(id);
                });
        });
    },
    completeTask(taskId) {
        return this.getTask(taskId)
            .then((task) => {
                if (!task) {
                    return Promise.reject(`Task with id : ${taskId} not found.`);
                }
                let completedTask = {
                    title: task.title,
                    description: task.description,
                    completed: true,
                    completedAt: Date.now()
                }
                return todo().then((collection) => {
                    return collection.updateOne({ _id: taskId }, completedTask)
                        .then((result) => {
                            return this.getTask(taskId);
                        });
                });
            });
    },
    removeTask(id) {
        if (!id) {
            return Promise.reject("You must provide an id to remove.");
        }
        return todo().then((collection) => {
            return collection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete task with id : ${id}`);
                }
            });
        });
    },
    removeAllTasks() {
        return todo().then((collection) => {
            return collection.drop();
        });
    },
    getAllTasks() {
        return todo().then((collection) => {
            return collection.find().toArray();
        });
    }
}
module.exports = exported;