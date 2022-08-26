
import connectDB from '../../auth/lib/connectDB';
import users from '../../model/userSchema';
import Scheme from '../../model/agencySchemeSchema';
import {getSession} from 'next-auth/react';
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
    try{
        const session = await getSession({req})
        // if (!session || session.user.role!=="individual") {
        //     return res.status(401).json({error: 'Unauthorized'})
        //     }
           let data1=await users.findOne({email:"shreyanushka02@gmail.com"})
           let data2=await Scheme.findOne({_id:req.body.scholarshipID})

           const x=new Map();
           
           
           const z=data1.interest.map(async(item1)=>{
               x.set(item1,1)
           })
           let c=0;
          const y= data2.interest.map(async(item2)=>{
            if(x.get(item2)){
                   c++;
            }
           })
           const results1=await Promise.all(y)
           const results2=await Promise.all(z)
            res.status(200).send({message:c})

    }
   catch(error){
       res.status(500).send(error);
   }
}





