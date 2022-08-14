import Agency from '../../model/agencySchema';
import connectDB from '../../auth/lib/connectDB';

connectDB();
export default async function handler(req,res){
   
    let data=  await Agency.findOneAndUpdate({email:req.body.email},req.body);
    if(data){
        return res.send(data);
    }
    return res.send("No profile exists")
}