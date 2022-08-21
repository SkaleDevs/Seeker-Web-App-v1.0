import Scheme from '../model/agencySchemeSchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
   try{
      
      let data=await Scheme.find({schemeType:"individual"});
      
      console.log("checkUser:",data)
      if(data){
          return res.send(data)
 }
 return res.send("No")
}
catch(error){
  res.status(500).send(error);
}
}