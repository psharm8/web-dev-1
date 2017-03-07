const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/:id",
    (req, res) => {
        recipeData.getRecipeById(req.params.id).then(recipe => {
                res.json(recipe);
            },
            () => {
                res.status(404).json({ error: "Recipie not found" });
            });
    });

router.put("/:id",
    (req, res) => {
        let updatedData = req.body;
        recipeData.getRecipeById(req.params.id).then(recipe => {
            return recipeData.updateRecipe(req.params.id, updatedData)
                .then(updated => {
                        res.json(updated);
                    },
                    e => {
                        res.status(500).json({ error: e });
                    });
        });
    });

router.delete("/:id",
    (req, res) => {
        recipeData.getRecipeById(req.params.id).then(() => {
            recipeData.removeRecipe(req.params.id)
                .then(() => {
                        res.sendStatus(200);
                    },
                    e => {
                        res.status(500).json({ error: e });
                    });
        }).catch(err => {
            res.status(404).send({ error: err });
        });
    });

router.post("/",
    (req, res) => {
        let recipe = req.body;
        recipeData.addRecipe(recipe.title, recipe.ingredients, recipe.steps)
            .then(newRecipe => {
                    res.json(newRecipe);
                },
                () => {
                    res.status(500).json({ error: e });
                });
    });

router.get("/",
    (req, res) => {
        recipeData.getAllRecipes().then(recipes => {
                res.json(recipes);
            },
            e => {
                res.status(500).json({ error: e });
            });
    });

module.exports = router;