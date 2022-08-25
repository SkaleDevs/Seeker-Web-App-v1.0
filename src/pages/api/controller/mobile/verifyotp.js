import { ConsoleLine } from 'mdi-material-ui';
import users from '../../model/userSchema';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import connectDB from '../../auth/lib/connectDB';
connectDB();
export default async function handler(req,res){
    
   try{
    var {token} =  cookie.parse(req?.headers.cookie || "");
    console.log(token)
        var decoded = jwt.verify(token,'secret');
        console.log(decoded)
        if(decoded.role!=="individual"){
            return res.status(401).json({error: 'Unauthorized'});
        } data= await users.findOne({email:decoded.email,role:"individual"});
      console.log("otp",data.otp);
      console.log(req.body.otp);
      console.log(Date.now());
      if(data.expire>=Date.now() && data.otp==req.body.otp){
        console.log("done1")
          return res.send({message:"yes"});
    }
    console.log("done2")
    return res.send("no");
    
   }catch(err){
       res.send(err);   
   }
    }