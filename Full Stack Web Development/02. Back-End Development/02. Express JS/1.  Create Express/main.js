require('dotenv/config');

const statusCode = require('http-status-codes');
const express =  require('express');

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.json('Server has get the request successfully : \n It is the response of that request:');
});
app.post('/sum',(req,res)=>{
    console.log(req.body);
    try {
        let a =req.body.x;
        let b =req.body.y;
        let c = a+b;
        res.status(statusCode.StatusCodes.OK).json({'addition':c});
    } catch (error) {
        res.status(statusCode.StatusCodes.BAD_REQUEST).json({'Messapge':'SomeThing Is Wrong'});
    }
    
});

app.get('/factorial/:fac',(req,res)=>{
    try{
      
        let fac = parseInt(req.params.fac);
        let faci =1;
        if(fac>0){
            for(let i=1;i<fac;i++){
                faci *= i;
            }
            res.status(statusCode.StatusCodes.OK).json(`Factorial is : ${faci}`);
        }
        else{
           res.status(statusCode.StatusCodes.BAD_REQUEST).json(`message:Only positive Number`);
        }
    }catch(error){
        res.status(statusCode.StatusCodes.INTERNAL_SERVER_ERROR).json(`alert:Something is Wrong`);
    }
})

app.listen(process.env.PORT,process.env.HOSTNAME,()=>{
    console.log(`Server is runnig at : http://${process.env.HOSTNAME}:${process.env.PORT}`);
});
