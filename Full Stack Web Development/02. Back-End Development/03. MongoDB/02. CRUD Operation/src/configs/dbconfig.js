import 'dotenv/config';
import mongoose from "mongoose";

export async function configureDb() {
    try {
        await mongoose.connect(process.env.dbUrl);
        console.log('Database is connected successfully');
    } catch (error) {
        console.log('connection Failed');
    }
}