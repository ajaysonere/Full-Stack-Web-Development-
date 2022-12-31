import { StatusCodes } from "http-status-codes";
import { adminModel } from "../models/adminModel.js";
import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

export async function saveAdmin(req, res) {
    try {        
        const newPassword = bcrypt.hashSync(req.body.password,12);
        req.body['password'] = newPassword;
        const admin = new adminModel(req.body);
        const saveAdmin = await admin.save();
        res.status(StatusCodes.CREATED).json(saveAdmin);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Something Went Wrong While Saving the Employee' });
    }
}

export async function fetchAllAdmin(req, res) {
    try {
        const admin = await adminModel.find();
        res.status(StatusCodes.OK).json(admin);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error has occured While fetching employee' });
    }
}


export async function login (req,res){
    try {
       const admin = await adminModel.findOne({phone:req.body.phone});
       if(admin){
           if( bcrypt.compareSync(req.body.password , admin.password)){
              const token =  jwt.sign({adminId:admin._id},'hello1234');
              res.status(StatusCodes.OK).json({token:token});
           }else{
            res.status(StatusCodes.BAD_REQUEST).json({message:'Invalid password'});
           }
       }else{
        res.status(StatusCodes.BAD_REQUEST).json({message:'Invalid Phone Number'});
       }
    } catch (error) {
        console.log("THis is error ",error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'try again after sometime'})
    }
}