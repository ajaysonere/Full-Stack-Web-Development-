import path from 'path';   
import http from 'http';
import color from 'cli-color';
import * as myModule from './module.js';


console.log(color.bgBlackBright('Hello World'));
myModule.register('ajay');
myModule.login('ajay','sonere');
// const server = http.createServer((req,res)=>{
//     res.write('Hello World');
//     res.write('folder path'+path.dirname(__filename));
//     res.end();
// });
// server.listen(7800,()=>{
//     // console.log('Folder name:', path.dirname(__filename));
//     console.log(`server is running at : http://localhost:7800`);
// })