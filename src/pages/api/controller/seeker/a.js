import ApplySeeker from '../../model/applyNowSeekerSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
    try{
        
        
         const session = await getSession({req})

        // if (!session || session.user.role!=="individual") {
        // return res.status(401).json({error: 'Unauthorized'})
        // }
     console.log(session.user.email)
        let data=await ApplySeeker.find({email:"shreyanushka02@gmail.com"});
        console.log("data",data)
    //const result=Promise.all(data)
    
    return res.status(200).send(data)
    }catch(error){
       res.status(500).send(error);
   }
}