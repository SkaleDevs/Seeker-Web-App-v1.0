import Institute from '../model/instituteSchema';
import connectDB from '../auth/lib/connectDB';

connectDB();
export default async function handler(req,res){
   
    let data=  await Institute.findOneAndUpdate({email:req.body.email},req.body);
    if(data){
        return res.send(data);
    }
    return res.send("No profile exists")
}