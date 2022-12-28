import express from "express";
import 'dotenv/config';
import { configureDb } from "./src/configs/dbconfig.js";
import employeeRouter from "./src/router/employeeRouter.js";

const app = express();

app.use(express.json());
app.use(employeeRouter);

configureDb();
app.listen(process.env.PORT,()=>{
    console.log(`Server is runnig at :  http://${process.env.HOSTNAME}:${process.env.PORT}`);
})
 