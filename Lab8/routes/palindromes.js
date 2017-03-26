const express = require('express');
const router = express.Router();
const data = require("../data");
const palindromes = data.palindromes;

router.get("/", (req, res) => {
    res.render("palindromes/form", {});
});

router.post("/", (req, res) => {
    let text = req.body.inputText;
    let result;
    try {
        result = palindromes.isPalindrome(text);
    } catch (e) {
        res.render("palindromes/form", { text: text, error: e });
        return;
    }
    res.render("palindromes/form", { text: text, result: result });
});

module.exports = router;