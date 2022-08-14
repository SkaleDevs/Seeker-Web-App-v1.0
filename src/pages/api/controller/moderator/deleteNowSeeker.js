import ApplySeeker from '../../model/applyNowSeekerSchema';
import connectDB from '../../auth/lib/connectDB';
connectDB();
export default async function handler(req,res){
   let details=await ApplySeeker.findOneAndDelete({email:req.body.email, seekerID:req.body.seekerID});
    res.send(details)
}