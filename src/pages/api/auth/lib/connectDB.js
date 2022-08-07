import mongoose from "mongoose";

const connectDB =  () => {
    if(mongoose.connections[0].readyState){
        console.log("Already Connected");
        return;
    }
    mongoose.connect(process.env.MONGODB_URI, {},err=>{
         if(err) throw err;
         console.log("Connected Successfully")
    })
}
export default connectDB; 