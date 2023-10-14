// synchrononus process 

// console.log("Ajay Sonere");
// console.log(`Your Name Is - `);


// asynchronous process 

// setTimeout(() => {
//    console.log("Ajay sonere"); 
// }, 4000);
// console.log("Your name is : ");



// let check = setTimeout(()=>{
//    alert("It's popUp ");
// },4000)

// console.log("One Pop Up Will Come After 5 Seconds :");


// let sum = (a,b)=>{
//    console.log("Arrow Function :" + (a+b));
// }

// setTimeout(sum, 5000,2,3);


function sum(a,b){
   console.log("Sum is :"+ (a+b));
}

function factorial(n){
   let f=1;
   for(let i=1;i<=n;i++){
      f *= i;
   }
   console.log(f);
}

function power(n,p){
   let result = 1;
   for(let i=1;i<=p;i++){
      result *= n;
   }
   console.log(result);
}


power(5,3);
factorial(5);
sum(10,20);



setTimeout(power,10000,4,2);
setTimeout(factorial,5000,3);
setTimeout(sum,2000,10,5);

