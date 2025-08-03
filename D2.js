let title = document.getElementById("title");
let btn = document.getElementById("btn");
let name = document.getElementById("name")

btn.addEventListener("click", function () {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Привіт " + name.value;
    document.body.appendChild(newParagraph);
});