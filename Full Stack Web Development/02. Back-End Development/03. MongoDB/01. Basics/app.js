import 'dotenv/config'
import express from 'express'
import employeeRouter from './src/router/employeeRouter.js';

const app = express();

app.use(express.json());

app.use(employeeRouter);

app.listen(process.env.PORT,()=>{
    console.log(`server is runnig at http://${process.env.HOSTNAME}:${process.env.PORT}`);
})
