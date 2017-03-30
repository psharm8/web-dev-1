const express = require('express');
const router = express.Router();
const data = require("../data");
const palindromes = data.palindromes;

router.get("/", (req, res) => {
    res.render("palindromes/form", {items:[]});
});

router.post("/", (req, res) => {
    let text = req.body.inputText;
    let items = JSON.parse(req.body.items);
    let result;
    try {
        result = palindromes.isPalindrome(text);
    } catch (e) {
        res.render("palindromes/form", { text: text, error: e, items: items });
        return;
    }
    items.splice(0, 0, result);
    res.render("palindromes/form", { text: text, items: items });
});

module.exports = router;