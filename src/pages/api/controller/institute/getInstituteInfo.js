import Institute from '../../model/instituteSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    const session = await getSession({req})
    if (!session || session.user.role!=="hei") {
    return res.status(401).json({error: 'Unauthorized'})
    }
    console.log(session.user.email)
    let data=  await Institute.findOne({email:session.user.email});
    if(data){
        return res.send(data);
    }
    return res.send("No profile exists")
}
