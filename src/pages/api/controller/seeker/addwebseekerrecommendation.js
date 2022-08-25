
import connectDB from '../../auth/lib/connectDB';
import users from '../model/users';
import {getSession} from 'next-auth/react';
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
    try{
        const session = await getSession({req})
        if (!session || session.user.role!=="individual") {
            return res.status(401).json({error: 'Unauthorized'})
            }
            let data1=await users.findOneandUpdate({_id:session.user.id},{interest:req.body.interest},{new:true});
            if(data1){
               return res.status(200).send({message:"Recommendation added successfully"});
            }
     res.status(200).send({message:"Could not find the user"})
   
    }
   catch(error){
       res.status(500).send(error);
   }
}






