import Agency from '../model/agencySchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
export default async function handler(req,res){
    let data =  await Agency.findOneAndUpdate({email:req.body.email},req.body);
    if(data){
        return res.send(data);
    }
    const details=new Agency({
    email:req.body.email,
    typeEnitity:req.body.typeEnitity,
    name:req.body.name,
    discription:req.body.discription,
    typeOrganisation:req.body.typeOrganisation,
    trustType:req.body.trustType,
    trustName:req.body.trustName,
    address:req.body.address,
    pincode:req.body.pincode,
    city:req.body.city,
    state:req.body.state,
    url:req.body.url,
    regNo:req.body.regNo,
    panNo:req.body.panNo,
    ifsc:req.body.ifsc,
    bankName:req.body.bankName,
    branchName:req.body.branchName,
    bankAccountNo:req.body.bankAccountNo,
    nameAsPerBank:req.body.nameAsPerBank,
    entityLogo:req.body.entityLogo,
    schemeManaged:req.body.schemeManaged,
    panFile:req.body.panFile,
    identityProofFile:req.body.identityProofFile,
    verified:"No",
    banned:"No"
    })
    details.save()
    res.send(details)
}