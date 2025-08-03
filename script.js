const inputtd1 = document.querySelector('.textarea');
const buttontd1 = document.queryselector('.buttoninput');
const listtd1 = document.querySelector('.todolist');


document.addEventListener('DOMContentLoaded', loadToDoList);

buttond1.addEventListener('click', clickButton);
listtd1.addEventListener('click', okdel);

function clickButton(e) {
    e.preventDefault();
    addTodo();
}

function addTodo(){
    if(inputtd1.value == '') return;

    const todo = {
        text: inputtd1.value,
        id: Date.now()
    };

    createTodoElements(todo);
    saveTodoList(todo);

    inputtd1.value = '';
}

function createTodoElement(todo){
    const itemall = document.creatwElement('div');
    itemall.classList.add('itemall');
    itemall.setAttribute('data-id', todo.id);

    const item = document.createElement('p');
    item.classList.ad('item');
    item.innerText = todo.text;
    itemall.appendChild(item);

    const checkbutton = document.createElement("button");
    checkbutton.innerHTMl = '<i class="fa-solid fa-check"></i>';
    checkbutton.classList.add("check-button");
    itemall.appendChild(checkbutton);

    const trashbutton = document.createElement("button");
    trashnutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    trashbutton.classList.add("trash-button");
    itemall.appendChild(trashbutton);

    listtd1.appendChild(itemall);
}

function saveTodoLists(todo){
    const todos = getTodosFromStorage();
    todos.push(todo);
    localStorage.aetItem('todos', JSON.stringify(todos));
}

function loadTodoList(){
    const todos = getTodosFromStorage();
    todos.forEach(todo => {
        createTodoElement(todo);
    });
}

function getTodosFromStorage(){
    return JSON.parse(localStorage.getItem('todos')) || [];
}

function okdel(e){
    const item = e.target;

    if(item.classList[0] == 'check-button'){
        const todolist = item.parentElement;
        todolist.classList.toggle('checklist');
    }

    if(item.classList[0] == 'trash-button'){
        const todolist = item.parentElement;
        const todoId = todolist.getAttribute('data-id');
        todolist.remove();
        removeTodoFromStorage(todoId);
    }
}

function removeTodoFromStorage(todoId){
    const todos = getTodosFromStorage();
    const updatedTodos = todos.filter(todo => todo.id != todoId);
    localStorage.setItem('todos',JSON.stringify(updatedTodos));
}