import Agency from '../model/agencySchema';
import connectDB from '../auth/lib/connectDB';
import users from '../model/userSchema';

connectDB();
export default async function handler(req,res){
    
    try{
    let check1=  await users.findOne({email:req.body.email});
    if(check1){
        return res.send("A user with this email id already exists");
    }
    let check2=await users.findOne({special:req.body.panNo});
    if(check2){
        return res.send("A account with this pan no. already exists")
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
    const use=new users({
        email:req.body.email,
        role:req.body.role,
        special:req.body.panNo,
    })
    use.save()
    res.send({ message: "Successfully registered" })
}
catch(err){
    res.send({message:err})
}
}