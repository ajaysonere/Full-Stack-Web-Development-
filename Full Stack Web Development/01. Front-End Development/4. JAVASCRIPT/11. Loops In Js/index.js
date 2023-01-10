// let a=0;
// while(a<5){
//     console.log(`A is : ${a} \n`);
//     a++;
// }

document.write("Working");

console.log("Loops IN JS ");

let a =0;
let i=0;
while(a<5){
    console.log("hello");
    console.log(i);
    a++;
    i++;
}

let b = 5;
while(b>=1){
    console.log(b);
    b--; 
}


let c=1;
while(c<=20){
    if(c%2==0){
        console.log(c);
    }
    c++;
}


// For Loop 
// for(let f=0;f<5;f++){
//     console.log("This is For Loop");
// }

// For each loop  

const names = ["Ajay ","Barbie","logic","Mf" , "Doom " , "Tool"];

// for(let name of names){
//     console.log(names.indexOf(name));
// }

// SPECIALLY FOR ARRAY 

names.forEach( (name,index)=>console.log(name,index));

// Break , continue , async adn await does work with for Each and it only work for arry


// for in loop 
const user = {
    firstName: "Ajay",
    lastName: "Sonere",
    email: "ajay@gmail.com",
    mobile: "9977449230"
}

for(let x in user){
    console.log(x);
}

