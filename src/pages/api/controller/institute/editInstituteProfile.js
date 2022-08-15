import Institute from '../../model/instituteSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    const session = await getSession({req})
    if (!session || session.user.role!=="institute") {
    return res.status(401).json({error: 'Unauthorized'})
    }
    let data=  await Institute.findOneAndUpdate({email:req.body.email},req.body);
    if(data){
        return res.send(data);
    }
    return res.send("No profile exists")
}