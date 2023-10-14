// const http = require('http');

// const hostName = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((request,respose)=>{
//     respose.statusCode = 200;
//     respose.setHeader('content-Type','text/plain');
//     respose.write('Hello World \n');
//     respose.end('This is Response End');
// })

// server.listen(port,hostName,()=>{
//     console.log(`Server is running at http://${hostName}:${port}/`)
// });

import { createServer } from "http";

createServer((req,res)=>{
    res.write('This is emport with response write');
    res.end("Here it's Response End");
}).listen(7800,()=>{
    console.log("Server is Runnig At 7800");
})
