import Seeker from '../../model/seekerSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    const session = await getSession({req})
    console.log(req.body);
    // console.log(req);
    if (!session || session.user.role!=="individual") {
        return res.status(401).json({error: 'Unauthorized'})
    }

    console.log(req.body.email);
    let data=  await Seeker.findOneAndUpdate({email:req.body.email},req.body,{ new: true });
    if(data){
        return res.send(data);
    }
    return res.send("No profile exists")
}