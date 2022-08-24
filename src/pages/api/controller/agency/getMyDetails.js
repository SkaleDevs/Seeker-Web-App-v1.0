import Agency from '../../model/agencySchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    try{
    const session = await getSession({req})
    console.log(session)
    if (!session || session.user.role!=="funding_agency") {
    return res.status(401).json({error: 'Unauthorized'})
    }
    let data=await Agency.find({_id:session.user.id});
    res.send(data)
   }
    catch(error){
        res.status(500).send(error);
    }

