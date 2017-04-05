(function() {
    function isPalindrome(text) {
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
        return result;
    }

    var staticForm = document.getElementById("static-form");
    if (staticForm) {
        var input = document.getElementById("inputText");
        var errorContainer = document.getElementById("error-container");
        var errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];
        var itemsContainer = document.getElementById("items-container");
        var itemsList = document.getElementById("items-list");
        staticForm.addEventListener("submit", function(event) {
            event.preventDefault();
            try {
                errorContainer.classList.add("hidden");
                var text = input.value;
                var result = isPalindrome(text);
                var li = document.createElement("li");
                li.classList.add("alert");
                li.textContent = text;
                if (result) {
                    li.classList.add("is-palindrome");
                } else {
                    li.classList.add("not-palindrome");
                }
                if (itemsList.hasChildNodes) {
                    itemsList.insertBefore(li, itemsList.firstChild);
                } else {
                    itemsList.appendChild(li);
                }
                itemsContainer.classList.remove("hidden");
            } catch (e) {
                var message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }
})();