
import connectDB from '../../auth/lib/connectDB';
import users from '../model/users';
import Scheme from '../../model/agencySchemeSchema';
import {getSession} from 'next-auth/react';
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
    try{
        const session = await getSession({req})
        if (!session || session.user.role!=="individual") {
            return res.status(401).json({error: 'Unauthorized'})
            }
           //let data1=await users.findOne({email:session.user.email})
           let data2=await Scheme.find()
             
           const x=[];
           const a=new Map()
           const y=data2.map(async(item1)=>{
               const ans=await fetch("/api/controller/seeker/countnoofmatch",{method:"POST",body:JSON.stringify({scholarshipID:item1._id}),headers:{"Content-type":"application/json;charset=UTF-8"}}).then(res=>res.json())
               a.set(ans,item1._id)
           })
           a=new Map([...a.entries()].sort())
           const results1=await Promise.all(y)
           //const results2=await Promise.all(z)
            res.status(200).send({message:c})

    }
   catch(error){
       res.status(500).send(error);
   }
}





