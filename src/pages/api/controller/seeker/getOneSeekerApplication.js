import ApplySeeker from '../../model/applyNowSeekerSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
    try{
        let data;
        const session = await getSession({req})
        if (!session || session.user.role!=="individual" || session.user.role!=="agency") {
        return res.status(401).json({error: 'Unauthorized'})
        }
    
        data=await ApplySeeker.findOne({seekerID:session.user.id,email:session.user.email,scholarshipID:req.body.scholarshipID})
    
    if(data[0]){
    return res.status(200).send(data);}
    return res.status(404).send("No data found");
    }
   
   catch(error){
       res.status(500).send(error);
   }
}