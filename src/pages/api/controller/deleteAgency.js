import user from '../model/userSchema';
import Agency from '../model/agencySchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
//does even the work of rejecting the verification stuff for agency account
export default async function handler(req,res){
   let data=await user.findOneAndDelete({email:req.body.email,role:"Agency"});
   let das= await Agency.findOneAndDelete({email:req.body.email});
       
    
    res.send(das,data)
}