import Scheme from '../model/agencySchemeSchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
export default async function handler(req,res){
    let data =  await Scheme.findOneAndUpdate({name:req.body.name},req.body);
    if(data){
        return res.send(data);
    }
    const details=new Scheme({
        name:req.body.name,
         schemeType:req.body.schemeType,
         agencyDescription:req.body.agencyDescription,
         eligibility:req.body.eligibility,
        deadline:req.body.deadline,
        maxAmount:req.body.maxAmount,
        extraDetailFile:req.body.extraDetailFile,
          
    })
    details.save()
    res.send(details)
}