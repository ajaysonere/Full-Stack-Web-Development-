import 'dotenv/config';
import express from 'express';
import numberRouter from './src/routers/NumberRouter.js';
import employeeRouter from './src/routers/employeerouter.js';

const app = express();
app.use(express.json());

app.use(numberRouter);
app.use(employeeRouter);
app.listen(process.env.PORT,()=>{
    console.log(`server is running at : http://${process.env.HOSTNAME}:${process.env.PORT}`);
});
