let title = document.getElementById("title");
let btn = document.getElementById("btn");
let name_g = document.getElementById("name")
let age_g = document.getElementById("age")
let p = document.getElementById("p")


btn.addEventListener("click", function () {
    
    if(name_g.value.trim() === "" || age_g.value.trim() === ""){
        p.textContent = "Заповніть всі поля!"
        
    }
    else{
        p.textContent = "Привіт " + name_g.value + "! Тобі " + age_g.value + " років.";
        
}
});