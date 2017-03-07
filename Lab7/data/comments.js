const mongoCollections = require("../config/mongoCollections");
const recipeData = require("./recipes");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

let exportedMethods = {
    getCommentsByRecipeId(id) {
        if (!id) {
            return Promise.reject("You must provide the id of recipe.");
        }
        return recipeData.getRecipeById(id)
            .then(recipe => {
                return recipe.comments.map(c => {
                    c["recipeId"] = recipe._id;
                    c["recipeTitle"] = recipe.title;
                    return c;
                });
            });
    },
    getCommentById(id) {
        if (!id) {
            return Promise.reject("You must provide the id of comment.");
        }
        return recipes().then((collection) => {
            return collection.findOne({ "comments._id": id })
                .then(recipe => {
                    if (!recipe) {
                        throw "Comment not found";
                    }
                    let comment = recipe.comments.find(c => c._id === id);
                    comment["recipeId"] = recipe._id;
                    comment["recipeTitle"] = recipe.title;
                    return comment;
                });
        });
    },
    addCommentToRecipe(id,poster, comment) {
        if (!id) {
            return Promise.reject("You must provide the id of recipe.");
        }
        if (!comment) {
            return Promise.reject("No comment provided.");
        }
        return recipeData.getRecipeById(id)
            .then(() => {
                let newComment = {
                    _id: uuid.v4(),
                    poster: poster,
                    comment: comment
                };
                return recipes().then(collection => {
                    return collection.updateOne({ _id: id }, { $addToSet: { comments: newComment } })
                        .then(() => {
                            return this.getCommentById(newComment._id);
                        });
                });
            });
    },
    updateComment(recipeId, commentId, updated) {
        if (!recipeId) {
            return Promise.reject("You must provide a recipe id to update.");
        }
        if (!commentId) {
            return Promise.reject("You must provide a comment id to update.");
        }
        if (!updated) {
            return Promise.reject("No update provided.");
        }

        return this.getCommentById(commentId).then((comment) => {
            if (comment.recipeId !== recipeId) {
                throw "This comment does not belong to provided recipe id.";
            }
            let update= {}
            if (updated.poster) {
                update["comments.$.poster"] = updated.poster;
            }
            if (updated.comment) {
                update["comments.$.comment"] = updated.comment;
            }
            return recipes().then(collection => {
                return collection.updateOne({ "comments._id": commentId }, { $set: update })
                    .then(() => {
                        return this.getCommentById(commentId);
                    });
            });
        });
    },
    removeComment(id) {
        if (!id) {
            return Promise.reject("You must provide a comment id to delete.");
        }
        return recipes().then(collection => {
            return collection.updateOne({ "comments._id": id }, { $pull: { "comments": { _id: id } } });
        });
    }
}

module.exports = exportedMethods;