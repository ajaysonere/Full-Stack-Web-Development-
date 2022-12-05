import 'dotenv/config';
import express from 'express';
import numberRouter from './src/routers/NumberRouter.js';


const app = express();
app.use(numberRouter);

app.get('/',(req,res)=>{
    res.send('This is Home Page :');
});

app.get('/factorial/:n',(req,res)=>{
    let n = parseInt(req.params.n);
    let fac = 1;
    for(let i=1;i<=n;i++){
        fac *= i;
    }
    res.status(StatusCodes.OK).json({'factorial':fac});
});

app.get('/sum',(req,res)=>{
    let a =10;
    let b= 5;
    let c = a+b;
    res.status(StatusCodes.OK).json({'Sum':c});
})


app.listen(process.env.PORT,process.env.HOSTNAME,()=>{
    console.log(`server is running at : http://${process.env.HOSTNAME}:${process.env.PORT}`);
});
