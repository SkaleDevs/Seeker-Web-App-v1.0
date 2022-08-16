import users from '../../model/userSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
   const session = await getSession({req})
    if (!session) {
    return res.status(401).json({error: 'Unauthorised'})
    }
   let data=await users.findOne({email:req.body.email,role:req.body.role});
   console.log(data)
   if(data){
    return res.send(data)
   }
   return res.status(401).send("No such user exists")
}