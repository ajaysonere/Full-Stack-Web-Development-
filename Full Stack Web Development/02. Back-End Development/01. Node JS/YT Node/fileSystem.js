import fs from "fs";
import {join} from "path";
 
// Create a folder
fs.mkdir(join('.','/src'),(error)=>{
     if(error){
        console.log(`Something went wrong `);
     }else{
        console.log(`Folder created`);
     }
});


// Create a file
fs.writeFile(join('.','src','text.txt'),'hello World ',(err)=>{
    if(err){
        console.log(`Error has occured`);
    }else{
        fs.appendFile(join('.','src','text.txt'),' It is node course',(err)=>{
            if(err){
                console.log(`Error has occured while appending data`);
            }else{
                console.log(`Data Appended succesfully`);
            }
        })
        console.log('File Created');
    }
})


// read file

fs.readFile(join('.','src','text.txt'),(err,data)=>{
    if(err){
        console.log('Error has occured while reading the file');
    }else{
        console.log(`File data :- ${data}`)
    }
})
