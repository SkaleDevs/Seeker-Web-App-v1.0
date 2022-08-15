import ApplySeeker from '../../model/applyNowSeekerSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    const session = await getSession({req})
  if (!session || session.user.role!=="seeker") {
  return res.status(401).json({error: 'Unauthorized'})
  }
   let details=await ApplySeeker.findOneAndDelete({email:req.body.email, seekerID:req.body.seekerID});
    res.send(details)
}