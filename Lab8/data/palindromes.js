let exportedMethods = {
    isPalindrome(text) {
        if (!text) throw "Must provide input text";
        let simple = text.replace(/([^\w]+)/g, "").toLowerCase();
        let result = true;
        let mid = Math.ceil(simple.length / 2);
        for (let i = 0; i < mid; i++) {
            if (simple.charAt(i) !== simple.charAt(simple.length - i - 1)) {
                result = false;
                break;
            }
        }
        return {
            isPalindrome: result,
            message: result ? "is a palindrome." : "is not a palindrome."
        };
    }
};

module.exports = exportedMethods;