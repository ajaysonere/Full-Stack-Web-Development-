import express from "express";
import 'dotenv/config';
import { configureDb } from "./src/configs/dbconfig.js";

const app = express();

configureDb();
app.listen(process.env.PORT,()=>{
    console.log(`Server is runnig at :  http://${process.env.HOSTNAME}:${process.env.PORT}`);
})
 