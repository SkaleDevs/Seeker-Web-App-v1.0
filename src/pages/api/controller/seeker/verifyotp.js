import { ConsoleLine } from 'mdi-material-ui';
import users from '../../model/userSchema';
export default async function handler(req,res){
    const session = await getSession({req})
    if (!session || session.user.role!=="individual") {
    return res.status(401).json({error: 'Unauthorized'})
    }
   try{
      let data= await users.findOne({email:session.user.email,role:"individual"});
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