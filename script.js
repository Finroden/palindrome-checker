const txtInput = document.querySelector(".inputs input"),
    checkBtn = document.querySelector(".inputs button"),
    Txt = document.querySelector(".txt");
let filterInput;
checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    Txt.style.display = "block";
    if(filterInput != reverseInput) {
        return Txt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    }
    Txt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
});
txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    Txt.style.display = "none";
    checkBtn.classList.remove("active");
});