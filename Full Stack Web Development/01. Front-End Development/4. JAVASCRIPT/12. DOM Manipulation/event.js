const btn = document.querySelector('#submit');
const todoList = document.querySelector('#todoList');
const todoNr = document.querySelector('.todoNr b');
const items = todoList.children;

btn.addEventListener('click' , ()=>{
     const newItem = document.createElement('li');
     newItem.classList.add('Item');
     newItem.innerText = `Item ${items.length+1}`;
     todoNr.innerText = `${items.length+1}`;
     todoList.appendChild(newItem);
     console.log('Element is created ');
}); 