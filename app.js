 function addToDoList(event) {
    const myToDo = document.getElementById('todo').value;
    let myUl = document.getElementById('ul');
    let li = document.createElement('li');
    let input1 = document.createElement('input');
    input1.type = "checkbox";
    let button1 = document.createElement('button');
    button1.innerText = 'delete';
    button1.style.width = '50px';
    button1.style.height = '20px';
    button1.style.color = 'red';
    li.append(input1);
    li.append(myToDo);
    li.append(button1);
    myUl.append(li);
 }

const addButton = document.getElementById('addItem');
const toDo = document.getElementById('todo');

addButton.addEventListener('click', addToDoList);
toDo.addEventListener('keypress', function(e){
   if(e.key === 'Enter'){
      addToDoList();
   }
});





