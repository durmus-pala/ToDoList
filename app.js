 function addToDoList() {
    const myToDo = document.getElementById('todo').value;
    console.log(myToDo);
    let myUl = document.getElementById('ul');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(myToDo));
    myUl.appendChild(li);
 }

const addButton = document.getElementById('addItem');

addButton.addEventListener('click', addToDoList);