import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
export function verifyToken(req,res,next){
   const authHeader = req.get('Authorization');
   if(authHeader){
    const token= authHeader.replace('Bearer ','');
    // const token = authHeader.split(' ')[1];
    jwt.verify(token,'hello1234',(err,payload)=>{
         if (err) {
             res.status(StatusCodes.UNAUTHORIZED).json({message:'access denied '});
            } else {
            next();
         }
    });
   }else{
    res.status(StatusCodes.UNAUTHORIZED).json({message:'Access denied '});
   }
}