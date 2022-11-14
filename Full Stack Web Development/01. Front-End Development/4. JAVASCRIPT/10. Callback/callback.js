function show(){
    console.log("Hello World !");
}

show();
obj = show;
console.log(obj);


function display(pla){
    console.log("Welcome");
    pla();
}

function place(){
    console.log("To Indore");
}

// setTimeout(display,2000);

display(place);


