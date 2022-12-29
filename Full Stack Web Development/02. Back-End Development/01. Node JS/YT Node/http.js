import http from 'http';
import {extname, join} from 'path';
import fs from 'fs';

const PORT = process.env.PORT || 3000
const app = http.createServer((req,res)=>{

    res.writeHead(200,{
        'Content-Type':'text/html',
    });

    // if(req.url === '/'){
    //     fs.readFile(join('.', 'src', 'index.html'), (err, data) => {
    //         if (err) {
    //             console.log('Error Has Occured while Index File Reading ');
    //         } else {
    //             res.end(data);
    //         }
    //     });
    // }
    //  else if(req.url === '/about'){
    //     fs.readFile(join('.','src','about.html'),(err,data)=>{
    //         if(err){
    //             console.log(`Error has occured while reading about html file`);
    //         }else{
    //             res.end(data);
    //         }
    //     })
    // }
    // else{

    // }
    
    let filePath = join('.','src',req.url === '/' ? 'index.html' : req.url);
    
    let contentType = 'text/html';



    let ext = extname(filePath);
    if(!ext){
        filePath +=".html";
    }
    switch(ext){
        case '.css': contentType = 'text/css';
                     break;
        case  '.js': contentType = 'text/javascript';
                     break;

        default : contentType = 'text/html';
    }


    fs.readFile(filePath,(err,data)=>{
        if(err){
            fs.readFile(join('.','src','error.html'),(err,data)=>{
                if(err){
                    res.writeHead(500);
                    res.end('Error !!');
                }else{
                    res.writeHead(404,{
                        'Content-Type': contentType
                    })
                    res.end(data);
                }
            })
        }else{
            res.writeHead(200 , {
                'Content-Type': contentType
            });
            res.end(data);
        }
    })


})

app.listen(PORT,()=>{
    console.log(`server is running at: http://localhost:${PORT}`);
})