import Scheme from '../../models/Scheme';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    const session = await getSession({req})
    if (!session || session.user.role!=="agency") {
    return res.status(401).json({error: 'Unauthorized'})
    }
    let data =  await Scheme.findOneAndUpdate({name:req.body.name},req.body);
    if(data){
        return res.send(data);
    }
    const details=new Scheme({
        name:req.body.name,
         schemeType:req.body.schemeType,
         agencyDescription:req.body.agencyDescription,
         eligibility:req.body.eligibility,
        deadline:req.body.deadline,
        maxAmount:req.body.maxAmount,
        extraDetailFile:req.body.extraDetailFile,
        noOfApplications:0,
    })
    details.save()
    res.send(details)
}