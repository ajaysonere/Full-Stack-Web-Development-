import 'dotenv/config';
import express from 'express';

const app = express();

app.get("/",(req,res)=>{
  res.send(`Hello Express`);
});


app.get("/sum/:a/:b",(req,res)=>{
    let a =parseInt(req.params.a);
    let b =parseInt(req.params.b);
    let c =a+b;
    res.send(`sum is : ${c}`);
});

app.get("/factorial/:n",(req,res)=>{
    let fac = 1;
    let n = parseInt(req.params.n);
    for(let i=1;i<=n;i++){
        fac *= i;
    }
    res.send(`Factorial is : ${fac}`);
})


app.listen(process.env.PORT,()=>{
console.log(`server is running at http://`+process.env.HOSTNAME +":"+ process.env.PORT);
});
