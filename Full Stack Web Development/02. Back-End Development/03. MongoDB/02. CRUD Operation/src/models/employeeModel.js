import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{type:String,required:true},
    fatherName:{type:String,required:true},
    motherName:{type:String,required:true},
    phone:{type:String,required:true,unique:true},
    salary:{type:Number,required:true},
    department:{type:String,required:true}
});

export const employeeModel = mongoose.model('employee',employeeSchema);