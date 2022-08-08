import user from '../model/userSchema';
import Institute from '../model/instituteSchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
export default async function handler(req,res){
  let data=await Institute.findOne({email:req.body.email});
  data.verified="Yes";
  data.save();
  let users=new user({
    email:req.body.email,
    role:"Institute",
  })
  users.save();
    res.send(users)
}