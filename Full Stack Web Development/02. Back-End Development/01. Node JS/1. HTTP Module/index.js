// console.log("First server");
const http = require('http');
const server = http.createServer((request,response)=>{
    // response.write('Node JS server ');
    let a = 10;
    let b = 20;
    response.write(`The Sum of A and B is : ${a+b}`);
    response.end();
});

server.listen(7800,()=>{
    console.log("Server is running on 7800 Port");
});