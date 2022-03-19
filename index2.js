// SELECTORS
const myText = document.querySelector('.my-text');
const todobtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');



//EVENTLISTENERS
todobtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//FUNCTIONS
function addTodo(event){
    //prevent page from submitting
        event.preventDefault();
    //TODO DIV 
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

    // Create Check button
        const completedButton = document.createElement('button');
        completedButton.innerHTML= '<i class="fa fa-check-square"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

    // Create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

    // Create Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML= '<i class="fa fa-trash-o"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
    // Append to list
        todoList.appendChild(todoDiv);

    // Clear todo input value
        todoInput.value = "";
}

function deleteCheck (e){
    const item = e.target;
   // DELETE TODO
   if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
   } 

 // Checkmark
    if (item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
}  

}



