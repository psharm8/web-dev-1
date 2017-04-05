const express = require('express');
const router = express.Router();
const data = require("../data");
const commentsData = data.comments;

router.get("/recipe/:id",
    (req, res) => {
        commentsData.getCommentsByRecipeId(req.params.id).then(comments => {
                res.json(comments);
            },
            (e) => {
                res.status(404).json({ error: e });
            });
    });

router.put("/:rid/:cid",
    (req, res) => {
        let updatedData = req.body;
        commentsData.getCommentById(req.params.cid).then(() => {
            commentsData.updateComment(req.params.rid, req.params.cid, updatedData)
                .then(updated => {
                    res.json(updated);
                },
                e => {
                    res.status(500).json({ error: e });
                });
        }).catch(e => {
            res.status(404).json({ error: e });
        });
    });

router.get("/:id",
    (req, res) => {
        commentsData.getCommentById(req.params.id).then(comment => {
                res.json(comment);
            },
            (e) => {
                res.status(404).json({ error: e });
            });
    });

router.delete("/:id",
    (req, res) => {
        commentsData.getCommentById(req.params.id).then(() => {
            commentsData.removeComment(req.params.id)
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

router.post("/:id",
    (req, res) => {
        let commentBody = req.body;
        commentsData.addCommentToRecipe(req.params.id, commentBody.poster, commentBody.comment)
            .then(newComment => {
                res.json(newComment);
            },
            () => {
                res.status(500).json({ error: e });
            });
    });

module.exports = router;