let task = document.getElementById("task");
let btn = document.getElementById("btn");
let arr = document.getElementById("arr");
let p = document.getElementById("p");
let todos = [];

btn.addEventListener("click", function () { // todo-список
    if (task.value.trim() === "") {         // Якщо рядок пустий
        p.textContent = "Введіть завдання!";
        return;
    } 
        
    p.textContent = "";
    console.log(todos);

    let todo = {text: task.value, done: false};
    todos.push(todo);
    let index = todos.length - 1;

    let newLi = document.createElement("li");
    newLi.textContent = todo.text;
    newLi.dataset.index = index;
        
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "✔ Завершити";
    doneBtn.addEventListener("click", function () {
        let idx = Number(newLi.dataset.index);
        todos[idx].done = !todos[idx].done;

        if (todos[idx].done) {
            newLi.style.textDecoration = "line-through";
        } else {
            newLi.style.textDecoration = "none";
        }
        console.log(todos);
    });
    let delBtn = document.createElement("button");
    delBtn.textContent = "🗑 Видалити";
    delBtn.addEventListener("click", function () {
        let idx = Number(newLi.dataset.index);
        todos.splice(idx, 1); 
        newLi.remove();       
        console.log(todos);
    });

    
    newLi.appendChild(doneBtn);
    newLi.appendChild(delBtn);


    arr.appendChild(newLi);
    task.value = "";
});