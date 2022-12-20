import http from 'http';
import url from 'url';
import fs from 'fs';
// const server = http.createServer((req,res)=>{
//    let q = url.parse(req.url,true).query;
//    let txt = q.year + " " + q.month;
//    res.end(txt);
// })
let data = 'HelloWorld';
const server = http.createServer((req,res)=>{
    fs.writeFileSync('demo.html','<p>This is Para</p>')

    const read = fs.readFileSync('demo.html',()=>{
        console.log('File has read succesfully');
    });
    res.write('Home Page '+ read);
    res.end();
});

server.listen(7800,'localhost',()=>{
    console.log(`Server is running on http://localhost:7800`);
})