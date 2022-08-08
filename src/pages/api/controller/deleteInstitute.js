import user from '../model/userSchema';
import Institute from '../model/instituteSchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
//does even the work of rejecting the verification stuff for institute account
export default async function handler(req,res){
   let data=await user.findOneAndDelete({email:req.body.email,role:"Institute"});
   
       let das= await Institute.findOneAndDelete({email:req.body.email});
       
    
    res.send(das)
}