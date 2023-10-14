require('dotenv').config();

// const http = require('http');

// const server  = http.createServer((req,res)=>{
//     res.write('Hello ');
//     res.end('World \n');
// });

// server.listen(process.env.PORT,process.env.HOSTNAME,()=>{
//     console.log(`Server is Running at : http://${process.env.HOSTNAME}:${process.env.PORT}`);
// })

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('WelCome');
});

app.get('/login/',(req,res)=>{
    res.send('This is Login Page :');
})

app.get('/singup/',(req,res)=>{
    res.send('This is Sign Up Page ');
})

app.listen(process.env.PORT , process.env.HOSTNAME , ()=>{
    console.log(`server is running at : http://${process.env.HOSTNAME}:${process.env.PORT}`)
})