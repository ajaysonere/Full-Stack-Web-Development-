import express from "express";
import 'dotenv/config';
import { configureDb } from "./src/configs/dbconfig.js";
import employeeRouter from "./src/router/employeeRouter.js";
import adminRouter from "./src/router/adminRouter.js";

import  cors  from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(employeeRouter);
app.use(adminRouter);

configureDb();
app.listen(process.env.PORT,()=>{
    console.log(`Server is runnig at :  http://${process.env.HOSTNAME}:${process.env.PORT}`);
})
