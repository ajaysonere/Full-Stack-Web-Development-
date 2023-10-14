function sum(a,b,callbackfun){
    let result = a+b; 
    callbackfun(result);
}

function displaySum(result){
    const h1 = document.querySelector("h1");
    h1.innerHTML = result;
}

sum(5,5,displaySum); 


function show(callback){
   console.log("Hi , My Name is :- ");
   callback();
}

function name(){
    console.log("Ajay Sonere ");
}

show(name);

const arr = [1,2,3,4,5];

function calculater(arr=[],callback){
    const ans = [];
    for(let i=0;i<arr.length;i++){
        ans.push(callback(arr[i]));
    }
    console.log(ans);
}

// function multiple(a){
//     return a*10;
// }
// function divide(a){
//     return a/10;
// }
// function addition(a){
//     return a+10;
// }
// function subtract(a){
//     return a-10;
// }

// function calculaterDevide(arr=[]){
//     const ans = [];
//     for(let i=0;i<arr.length;i++){
//         ans.push(arr[i]/10);
//     }
//     console.log(ans);
// }

calculater(arr,(m)=> m*10);
calculater(arr,(d)=> d/10);
calculater(arr,(a)=> a+10);
calculater(arr,(s)=> s-10);


// Anonymous fuction 

// const w = function(a,b){
//     console.log(a+b);
// }
// w(10,20);

// arrowFunction 

// const z = (x,y)=> {
//    let ans =  x*y;
//    console.log(ans);
//    return ans;
// }


// const r = z(10,15);
// console.log(r);


let x = function (a,b){
    // This is anonymous function ..
    return a*b;
};

let z = x(2,3);
console.log(`The Value of Z is ${z}`);

(function(){
    console.log("This is self - Invoke Function :");
})();
// Arrow function 
// IN  ES 5

var a = function(x,y){
    return x*y;
}

var b = a(4,3);
console.log(b);
// IN ES 6
// const es = (x,y)=>x*y;
// console.log(es(2,3));

const w = (x,y)=>{
  return x*y;
}

const ans = w(5,5);
console.log(ans);


const myObject = {
    firstName :"AJAY",
    lastName : "SONERE",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(myObject.fullName());

const v = ()=>{
    console.log("Hello World");
    return 10;
}
const k = v();
console.log(k); 

