const http = require('http');
const server = http.createServer((request,respose)=>{
    respose.write('Hello World');
    respose.end();
})

server.listen(7800);