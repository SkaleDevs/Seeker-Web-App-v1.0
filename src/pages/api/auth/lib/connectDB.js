import mongoose from "mongoose";

const connectDB =  () => {
    if(mongoose.connection[0].readyState){
        console.log("Already Connected");
        return;
    }
    mongoose.connect(process.env.MONGO_URI, {},err=>{
         if(err) throw err;
         console.log("Connected Successfully")
    })
}
export default connectDB; 