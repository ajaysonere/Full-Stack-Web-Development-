import  Express  from "express";
import 

const numberRouter = express.Router();

numberRouter.get("/factorial/:n",processFactorial);
numberRouter.get("/sum",processSum);