// const headers = document.getElementsByTagName('h2')
// const items = document.getElementsByClassName('item');

// console.log(headers);
// console.log(items);

// For Get All King all Element in one query 

// const header = document.querySelectorAll('h2');
// const list = document.querySelectorAll('.item');

// console.log(list);
// console.log(header);
// console.log(header[0]);

// const collectionItems = document.getElementsByClassName('item');

// const nodeItems = document.querySelector("#todo-list");

// console.log(collectionItems , nodeItems);
// const nodeChilds  = document.querySelector("#todo-list");
// console.log(nodeChilds.childNodes); 

// const createElement = document.querySelector('.item');
// console.log(createElement);

// const todoList = document.getElementById('todo-list');


// const newItem = document.createElement("li");
// newItem.classList.add('item');
// newItem.innerText = 'ITEM 4';

// nodeItems.appendChild(newItem);
// console.log(nodeItems);

// const todoNr = document.getElementsByClassName('todo-Nr')[0];
// todoNr.innerText = collectionItems.length;


const nodeList =  document.querySelector("#todo-list");
const listNumber = document.querySelectorAll('.item')
const item = nodeList.children;

const newItem = document.createElement('li');
newItem.classList.add('item');
newItem.innerHTML = "ITEM 3";

const newItem4 = document.createElement('li');
newItem.classList.add('item');
newItem.innerHTML = "ITEM 4";

const liNumber= document.querySelectorAll('.todoNr')[0];

nodeList.appendChild(newItem);
nodeList.appendChild(newItem4);

liNumber.innerText = item.length;