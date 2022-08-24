import Scheme from '../model/agencySchemeSchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
    try{
    let data=await Scheme.find({schemeType:"hei"});
   res.status(200).send(data);}
   catch(error){
       res.status(500).send(error);
   }
}