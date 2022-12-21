import 'dotenv/config';
import http from 'http';
import express from 'express';
import StatusCodes  from 'http-status-codes';


const app = express(); 
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello This is Home Page :');

})

app.post('/sum',(req,res)=>{
    console.log(req.body);
    const x = req.body.x;
    const y = req.body.y;
    const c = x+y;
    res.status(StatusCodes.OK).json( 'sum :'+ c);
})

app.get('/factorial/:n',(req,res)=>{

    const number = parseInt(req.params.n);
    try {
        if(number > 0){
            let fac = 1;
            for (let i = 1; i <= number; i++) {
                fac *= i;
            }
            res.status(StatusCodes.OK).json("factorial is " + fac);
        }else if(number <0 ){
            res.status(StatusCodes.BAD_REQUEST).json(`Please Provide the +ve Number `);
        }
        throw (error);
    }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(`Something went wrong`);
    }
});

app.listen(process.env.PORT,()=>{
    console.log(`Seerver is runnig at : http://${process.env.HOSTNAME}:${process.env.PORT}`);
})