import {StatusCodes} from 'http-status-codes';

import { factorial,sum} from "../services/NumberService.js";

export function processFactorial(req,res){
       try {
           let n = parseInt(req.params.n);
           if(n>0){
               let fac = factorial(n);
               res.status(StatusCodes.OK).json({factorial:fac});
           } else{
            res.status(StatusCodes.BAD_REQUEST).json({message:'Please Provide +ve Number'});
           }
       } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something went Wrong'});
       }
}
export function processSum(req,res){
    let a  = req.body.x;
    let b  = req.body.y;
    let result = sum(a,b);
    res.status(StatusCodes.OK).json({sum : result});
}