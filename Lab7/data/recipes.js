const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

let exportedMethods = {
    getAllRecipes() {
        return recipes().then(collection => {
            return collection.find().map(v => {
                return {
                    _id: v._id,
                    title: v.title
                };
            }).toArray();
        });
    },
    getRecipeById(id) {
        if (!id) {
            return Promise.reject("You must provide the id of the Recipe.");
        }
        return recipes().then((collection) => {
            return collection.findOne({ _id: id})
                .then(recipe => {
                    if (!recipe) {
                        throw "Recipe not found";
                    }
                    return recipe;
                });
        });
    },
    addRecipe(title, ingredients, steps) {
        if (!title) {
            return Promise.reject("You must provide a title to the recipe.");
        }

        return recipes().then(collection => {
            const nr = {
                _id: uuid.v4(),
                title: title,
                ingredients: ingredients,
                steps: steps,
                comments:[]
            };
            return collection.insertOne(nr).then(insertInfo => {
                return insertInfo.insertedId;
            }).then(id => {
                return this.getRecipeById(id);
            });
        });
    },
    updateRecipe(id, updated) {
        if (!id) {
            return Promise.reject("You must provide an id to update.");
        }
        if (!updated) {
            return Promise.reject("No update provided.");
        }

        return recipes().then(collection => {
            let updatedRecipe = {};
            if (updated.title) {
                updatedRecipe.title = updated.title;
            }
            if (updated.ingredients) {
                updatedRecipe.ingredients = updated.ingredients;
            }
            if (updated.steps) {
                updatedRecipe.steps = updated.steps;
            }
            let command = {
                $set: updatedRecipe
            };
            return collection.updateOne({ _id: id }, command).then(() => {
                return this.getRecipeById(id);
            });
        });
    },
    removeRecipe(id) {
        if (!id) {
            return Promise.reject("You must provide an id to remove.");
        }
        return recipes().then((collection) => {
            return collection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete Recipe with id : ${id}`);
                }
            });
        });
    }
};

module.exports = exportedMethods;