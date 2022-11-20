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

