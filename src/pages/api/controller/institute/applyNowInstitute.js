import ApplyInstitute from '../../model/applyNowInstituteSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    const session = await getSession({req})
    if (!session || session.user.role!=="institute") {
    return res.status(401).json({error: 'Unauthorized'})
    }
    let data =  await ApplyInstitute.findOneAndUpdate({email:req.body.email, regNo:req.body.regNo},req.body);
    if(data){
        return res.send(data);
    }
    const details=new ApplyInstitute({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        pincode:req.body.pincode,
        city:req.body.city,
        state:req.body.state,
        url:req.body.url,
        regNo:req.body.regNo ,
        proposal:req.body.proposal,
        proposalFile:req.body.proposalFile,
          
    })
    details.save()
    res.send(details)
}