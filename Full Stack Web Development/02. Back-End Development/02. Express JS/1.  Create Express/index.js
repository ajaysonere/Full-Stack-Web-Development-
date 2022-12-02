
//  Take input as  URL Parameter 

require('dotenv/config');

const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send(`This is a Main OR Home Page :`);
});

app.get("/mul/:a",(req,res)=>{
    let result = parseInt(req.params.a);
    result *=result;
    res.send('The Multiplication of the Number is '+result);
})

app.get("/sum/:a/:b",(req,res)=>{
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let c= a+b;
    res.send(`The Sum of A and B is ${c.toString()}`);
});

app.listen(process.env.PORT, process.env.HOSTNAME,()=>{
    console.log(`server is runnig at : http://${process.env.HOSTNAME}:${process.env.PORT}`)
});


