// console.log('Hello World');
// // console.log(__filename);
// // console.log(__dirname);
// myFunction = function(){
//   return('MY Function');
// };

// console.log(myFunction());

// const data = require('./data');

// console.log(` The Introduction :\n Name Is : ${data.name} \n Email Is : ${data.email} \n Age Is : ${data.age}\n`);

const fs = require('fs');

fs.readFile('demo.txt',(error,data)=>{
    if(error){
        console.log(error);
    }
    console.log(data.toString());
});


