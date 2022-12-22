import 'dotenv/config';
import express from 'express';
import numberRouter from './src/routers/NumberRouter.js';

const app = express();
app.use(express.json());
app.use(numberRouter);
app.listen(process.env.PORT,()=>{
    console.log(`server is running at : http://${process.env.HOSTNAME}:${process.env.PORT}`);
});
