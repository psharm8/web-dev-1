const express = require('express');
const router = express.Router();
const passport = require("passport");

router.get("/private", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("layouts/private", { user: req.user });
    } else {
        res.redirect("/");
    }
});

router.get("/", (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect("/private");
    } else {
        res.render("layouts/login", { error: req.flash('error') });
    }
});
router.post('/login', passport.authenticate('local', {
    failureRedirect: "/",
    successRedirect: '/private',
    failureFlash: true
}));

module.exports = router;