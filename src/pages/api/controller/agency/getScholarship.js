import Scheme from '../../model/agencySchemeSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    try{
    const session = await getSession({req})
    if (!session || session.user.role!=="agency") {
    return res.status(401).json({error: 'Unauthorized'})
    }
    let data=await Scheme.find({agencyEmail:session.user.email});
    res.send(data)
   }
    catch(error){
        res.status(500).send(error);
    }
    
}