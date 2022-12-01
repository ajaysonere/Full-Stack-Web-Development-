const http = require('http');
const numberModule = require('./NumberOperations');
const PORT = 7800;
const server = http.createServer((req,res)=>{
    let add = numberModule.sum(2,7);
    let mul = numberModule.product(2,7);
    res.write(` The Sum is ${add} and The Product is ${mul}`);
    res.end(' \n Response End');
});

server.listen(PORT,()=>{
    console.log("Server is Runnig at :" + PORT);
});