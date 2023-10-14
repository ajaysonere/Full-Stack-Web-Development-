const http = require('http');
const server = http.createServer((request,response)=>{
    response.write('The Server is Build Successfully ');
    response.end();
    console.log("Bulid Succesfully");
});

server.listen(5000,()=>{
    console.log('server listened Successfully');
});