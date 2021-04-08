/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
function addToDoList() {
  const myToDo = document.getElementById('todo').value;
  const myUl = document.getElementById('ul');
  const li = document.createElement('li');
  const input1 = document.createElement('input');
  input1.type = 'checkbox';
  const button1 = document.createElement('button');
  button1.innerText = 'delete';
  button1.style.width = '50px';
  button1.style.height = '20px';
  button1.style.color = 'red';
  button1.addEventListener('click', () => {
    myUl.removeChild(li);
  });
  li.append(input1);
  li.append(myToDo);
  li.append(button1);
  myUl.append(li);
  toDo.value = '';
}

const addButton = document.getElementById('addItem');
const toDo = document.getElementById('todo');

addButton.addEventListener('click', addToDoList);
toDo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addToDoList();
  }
});
