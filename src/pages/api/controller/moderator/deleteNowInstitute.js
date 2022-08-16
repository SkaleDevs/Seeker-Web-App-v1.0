import ApplyInstitute from '../../model/applyNowInstituteSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    const session = await getSession({req})
    if (!session || session.user.role!=="moderator") {
    return res.status(401).json({error: 'Unauthorized'})
    }
   let details=await ApplyInstitute.findOneAndDelete({email:req.body.email, regNo:req.body.regNo});
    res.send(details)
}