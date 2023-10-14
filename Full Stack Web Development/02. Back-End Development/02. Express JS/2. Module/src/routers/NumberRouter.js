import express from 'express';
import { processMain, processFactorial , processSum } from '../controllers/NumberController.js';

const numberRouter = express.Router();

numberRouter.get('/',processMain);
numberRouter.get("/factorial/:n",processFactorial);
numberRouter.post('/sum',processSum);

export default numberRouter;