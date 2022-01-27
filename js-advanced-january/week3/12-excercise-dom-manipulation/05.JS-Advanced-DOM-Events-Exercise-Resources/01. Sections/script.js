function create(words) {
    for (let word of words) {
        let divElement = document.createElement("div");
        let pElement = document.createElement("p");
        pElement.style.display = "none";
        pElement.textContent = word;
        divElement.appendChild(pElement);
        let bodyElement = document.getElementById("content");
        divElement.addEventListener("click", loadText);
        function loadText() {
            pElement.style.display = "block";
        }
        bodyElement.appendChild(divElement);
    }
}
