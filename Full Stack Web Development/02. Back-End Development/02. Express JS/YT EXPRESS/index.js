import express from 'express';
import { fileURLToPath } from 'url'
import  { basename, dirname, extname, join } from 'path';

const PORT = process.env.PORT || 7800
const app = express();
const filePath = fileURLToPath(import.meta.url);
// console.log(dirname(filePath)+'/src/index.html');

app.get('/',(req,res)=>{
    res.sendFile(dirname(filePath)+'/src/index.html');
})

app.get('/about',(req,res)=>{
    res.sendFile(dirname(filePath)+'/src/about.html');
})

app.get('/contect',(req,res)=>{
    res.sendFile(dirname(filePath)+'/src/contect.html');
});

app.get('/service',(req,res)=>{
    res.sendFile(dirname(filePath)+'/src/service.html');
})

app.listen(7800,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})
