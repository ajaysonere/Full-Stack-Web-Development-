// const color = require('cli-color');

// console.log(color.blue('Hello Node JS'));

// console.log(color.green('Hello Node JS'));

// console.log(color.red('Hello Node JS'));

// console.log(color.redBright('Hello Node JS'));

// const path = require('path')

// dirname
// console.log('Folder Name ', path.dirname(__filename));

// console.log('File Name ', path.basename(__filename));

// console.log(__filename);

// console.log('Extension Name ', path.extname(__filename));

// parse 
// console.log('parse : ', path.parse(__filename));

// join 

// console.log("Join :",path.join(__dirname,'node js','module.js'));

// File System 
export const register = function (username){
    console.log(`Dear user ${username} , you have been succesfully registered `);
}

export const login = function(username,password){
    console.log(`${username} is logged in`);
}


