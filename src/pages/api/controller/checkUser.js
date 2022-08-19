import users from '../model/userSchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
   let data=await users.findOne({email:req.body.email});
   console.log("checkUser:",data)
   if(data){
    return res.send(data)
   }
   return res.send("No")
}