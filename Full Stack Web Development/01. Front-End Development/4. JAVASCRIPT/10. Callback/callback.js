function show(){
    console.log("Hello World !");
}

show();
obj = show;
console.log(obj);


function display(plac){
    console.log("Welcome");
    plac();
}

function place(){
    console.log("To Indore");
}

// setTimeout(display,2000);

display(place);


