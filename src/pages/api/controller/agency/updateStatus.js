import ApplySeeker from '../../model/applyNowSeekerSchema';
import ApplyInstitute from '../../model/applyNowInstituteSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    try{
    const session = await getSession({req})
    if (!session || session.user.role!=="funding_agency") {
    return res.status(401).json({error: 'Unauthorized'})
    }
    
    let {type,status,id}=req.body;
    
    let data;
    if(type==="institute"){
         data=await ApplyInstitute.findOneAndUpdate({_id:id},{status:status},{new:true});
         
    }
    else{
        data=await ApplySeeker.findOneAndUpdate({_id:id,seekerID:session.user.id},{status:status});
    }
    console.log("data",data)
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