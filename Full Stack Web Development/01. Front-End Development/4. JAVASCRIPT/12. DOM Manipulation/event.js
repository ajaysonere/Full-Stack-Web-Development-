const btn = document.querySelector('#submit');
const todoList = document.querySelector('#todoList');
const todoNr = document.querySelector('.todoNr b');
const mainTitle = document.querySelector('.mainTitle');
const items = todoList.children;

btn.addEventListener('click' , ()=>{
     const newItem = document.createElement('li');
     newItem.classList.add('Item');
     newItem.innerText = `Item ${items.length+1}`;
     todoNr.innerText = `${items.length+1}`;
     todoList.appendChild(newItem);
     console.log('Element is created ');
     newItem.addEventListener("click",(event)=>{
         event.stopPropagation();
         event.target.remove();
         todoNr.innerText = `${items.length}`;
         console.log("ITEM DELETED ");
     })
}); 

todoList.addEventListener("click" , ()=>{
    // It was running because of the event babling
    console.log("UL EXCUTED ");
    todoList.classList.add("fade");
})

// for(item of items){
//     item.addEventListener("click",()=>{
//         console.log(`ITEM DELETED `);
//     }); 
// }

// btn.addEventListener('click' , ()=>{
//     // mainTitle.style.color = "red";
//     // mainTitle.style.fontSize = "50px";
//     mainTitle.classList.toggle("display");
// });