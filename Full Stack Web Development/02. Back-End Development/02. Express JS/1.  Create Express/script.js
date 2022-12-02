require('dotenv/config');

const express = require('express');
const { append } = require('vary');

const app = express();

app.get('/',(req,res)=>{
    res.send('This is Home Page ');
});

app.get('/registration/:firstName/:lastName',(req,res)=>{
   const firstName = req.params.firstName;
   const lastName = req.params.lastName;
   res.json({'firstname' :firstName,'lastname':lastName});
});

app.listen(process.env.PORT , process.env.HOSTNAME,()=>{
    console.log(`serving is Running at : http://${process.env.HOSTNAME}:${process.env.PORT}`);
})