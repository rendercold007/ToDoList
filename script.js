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