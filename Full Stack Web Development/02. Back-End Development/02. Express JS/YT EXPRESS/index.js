import express from 'express';
import { fileURLToPath } from 'url'
import  { basename, dirname, extname, join } from 'path';
import apiKeys from './middlewares/apikeys.js';


const PORT = process.env.PORT || 7800
const app = express();
app.set('view engine','ejs');

// console.log(app.get('view engine'));
console.log(app.get('views'));

const filePath = fileURLToPath(import.meta.url);
// console.log(dirname(filePath)+'/src/index.html');

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Home Page'
    });
})
 
app.get('/about',(req,res)=>{
    // res.sendFile(dirname(filePath)+'/about.html');
    res.render('about',{
        title:'About us'
    });
})

app.get('/contect', (req,res)=>{
    // res.sendFile(dirname(filePath)+'/contect.html');
    res.render('contect',{
        title:'Contect Us'
    });

});

app.get('/service',(req,res)=>{
    // res.sendFile(dirname(filePath)+'/service.html');
    res.render('service',{
        title:'services Page'
    });
})

app.get('/api/products',apiKeys,(req,res)=>{
    res.json([
        {
            id:'123',
            product:'chrome'
        },
        {
            id: '456',
            product: 'Brave'
        }
    ])
})

app.get('/download',(req,res)=>{
    res.download(dirname(filePath)+'/about.html');
})

app.listen(7800,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})
