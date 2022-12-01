const http = require('http');
const fs = require('fs');
const myModule = require('./src/mymodule');

let gdata = "A";
const PORT = 7800;
const hostName = "localhost";

const server =  http.createServer((req,res)=>{
    fs.writeFile('instruction.txt',"B. It is the First Instruction",()=>{
        console.log('Write Operation Is Completed \n');
    });

    fs.readFile('instruction.txt',(error,data)=>{
        
        if(error){
            console.log("Something Is Wrong...");
        }else{
           gdata = data.toString();
           console.log('read Successfully');
        }
    });

    res.write(`Instruction is : ${gdata} \n`);
    let sum = myModule.addition(10,20);

    let substraction = myModule.substraction(20,10);

    let multiplication = myModule.multiplication(10,20);

    let division = myModule.division(50,5);

    res.write(`Sum is :${sum} \n`);

    res.write(`Substraction is :${substraction} \n`);

    res.write(`Multiplication is : ${multiplication} \n`);

    res.write(`Divison of ther Number is : ${division} \n`);
    console.log("After the Write File");
    res.write('It is Write Response \n');
    res.end();
});

server.listen(PORT,hostName,()=>{
    console.log(`Server is Running at : http://${hostName}:${PORT}`);
});