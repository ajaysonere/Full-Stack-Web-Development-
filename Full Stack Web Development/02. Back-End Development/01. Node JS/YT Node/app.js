// import http from 'http';
import path from 'path'   
// const http = require('http');



const server = http.createServer((req,res)=>{
    res.write('Hello World');
    res.write('folder path'+path.dirname(__filename));
    res.end();
});
server.listen(7800,()=>{
    // console.log('Folder name:', path.dirname(__filename));
    console.log(`server is running at : http://localhost:7800`);
})