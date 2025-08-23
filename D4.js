let task = document.getElementById("task");
let btn = document.getElementById("btn");
let arr = document.getElementById("arr");
let p = document.getElementById("p");
let todos = [];

btn.addEventListener("click", function () {
    let newLi = document.createElement("li");

    if (task.value.trim() === "") {p.textContent = "Введіть завдання!";} 
    else {
        p.textContent = "";
        newLi.textContent = task.value;
        todos.push({Text: task.value, done: false});
        let index = todos.length - 1;
        newLi.dataset.index = index;
        arr.appendChild(newLi);
        
        newLi.addEventListener("click", function () {
            let idx = Number(newLi.dataset.index);
            newLi.classList.toggle("done");
            todos[idx].done = !todos[idx].done;

            console.log(todos);
        })}
    task.value = "";
});