import user from '../model/userSchema';
import Seeker from '../model/seekerSchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
export default async function handler(req,res){
   let data=await user.findOneAndDelete({email:req.body.email,role:"Seeker"});
   let das;
    if(data){
        das= await Seeker.findOneAndDelete({email:req.body.email});
       
    }
    res.send(das)
}