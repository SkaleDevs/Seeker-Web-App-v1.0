import ApplyInstitute from '../model/applyNowInstituteSchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
export default async function handler(req,res){
   let details=await ApplyInstitute.findOneAndDelete({email:req.body.email, regNo:req.body.regNo});
    res.send(details)
}