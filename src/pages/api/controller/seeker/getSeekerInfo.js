import Seeker from '../../model/seekerSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    const session = await getSession({req})
    if (!session || session.user.role!=="individual") {
    return res.status(401).json({error: 'Unauthorized'})
    }
    let data=  await Seeker.findOne({email:session.user.email});
    console.log("getseekr",data);
    if(data){
        return res.send(data);
    }
    return res.send("No profile exists")
}