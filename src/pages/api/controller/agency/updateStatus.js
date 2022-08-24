import ApplySeeker from '../../model/applyNowSeekerSchema';
import ApplyInstitute from '../../model/applyNowInstituteSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    try{
    const session = await getSession({req})
    if (!session || session.user.role!=="agency") {
    return res.status(401).json({error: 'Unauthorized'})
    }
    let {type,status,id}=req.body;
    let data;
    if(type==="hei"){
         data=await ApplyInstitute.findOneAndUpdate({_id:id,agencyID:session.user.id},{status:status});
    }
    else{
        data=await ApplySeeker.findOneAndUpdate({_id:id,seekerID:session.user.id},{status:status});
    }
    if(data){
        return res.send({message:`${status}ed successfully`});
    }
    else{
        return res.send({message:"No data found"});
    }}
    catch(error){
        res.status(500).send(error);
    }
    
}