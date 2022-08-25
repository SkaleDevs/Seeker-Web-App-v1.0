
import connectDB from '../../auth/lib/connectDB';
import users from '../model/users';
import cookie from 'cookie';
import jwt from "jsonwebtoken"

connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
    try{
        var {token} =  cookie.parse(req?.headers.cookie || "");
        var decoded = jwt.verify(token, 'secret');
        if(decoded.role!=="individual"){
            return res.status(401).json({message: 'Unauthorized'});
        }
    let data1=await users.findOneandUpdate({_id:session.user.id},{interest:req.body.interest},{new:true});
   if(data1){
      return res.status(200).send({message:"Recommendation added successfully"});}
      return res.status(200).send({message:"Could not find the user"})

    }
   catch(error){
       res.status(500).send(error);
   }
}





