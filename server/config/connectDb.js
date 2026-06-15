import mongoose from "mongoose";


const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(`Database Error ${error}`);
    }
}


export default connectDb;