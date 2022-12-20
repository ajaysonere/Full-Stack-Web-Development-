import 'dotenv/config';
import express from 'express';
import {StatusCodes} from 'http-status-codes'  

const app = express();

app.get("/",(req,res)=>{
  res.send(`Hello Express`);
});


app.get("/sum/:a/:b",(req,res)=>{
    let a =parseInt(req.params.a);
    let b =parseInt(req.params.b);
    let c =a+b;
    res.json(`{sum is : ${c}}`);
});

app.get("/factorial/:n",(req,res)=>{
     try{
        let n = parseInt(req.params.n);
        if(n>0){
            let fac = 1;
            for(let i=1;i<=n;i++){
                fac *= i;
            }
            res.status(StatusCodes.OK).json({Factorial :fac});  
        }else{
            res.status(StatusCodes.BAD_REQUEST).json({message:"Only Positive Number are allowed "}); 
        }
     } catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'something went wrong '});
     }
})

app.listen(process.env.PORT,()=>{
console.log(`server is running at http://`+process.env.HOSTNAME +":"+ process.env.PORT);
});
