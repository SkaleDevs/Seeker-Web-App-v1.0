import ApplySeeker from '../../model/applyNowSeekerSchema';
import connectDB from '../../auth/lib/connectDB';
import cookie from 'cookie'


connectDB();
export default async function handler(req,res){

    try {

        const cookies  = req.headers.cookie;
        console.log(cookies);
        var {token} =  cookie.parse(req?.headers.cookie || "");
        var decoded = jwt.verify(token, 'secret');
        if(decoded.role!=="seeker"){
            return res.status(401).json({error: 'Unauthorized'});
        }
    
  
    let data =  await ApplySeeker.findOneAndUpdate({email:req.body.email, scholarshipID:req.body.scholarshipID,
        seekerID:req.body.seekerID,},req.body);
    if(data){
        return res.send(data);
    }
    const details=new ApplySeeker({
           scholarshipID:req.body.scholarshipID,
           seekerID:req.body.seekerID,
           email:req.body.email,
           phNo:req.body.phNo,
           firstName:req.body.firstName,
           middleName:req.body.middleName,
           lastName:req.body.lastName,
           guardianFirstName:req.body.guardianFirstName,
           guardianMiddleName:req.body.guardianMiddleName,
           guardianLastName:req.body.guardianLastName ,
           dateOfBirth:req.body. dateOfBirth,
           category:req.body.category,
           sex:req.body.sex,
           marks12:req.body.marks12,
           marks12File:req.body.marks12File,
           marks10:req.body.marks10,
           marks10File:req.body.marks10File,
           highestQualification:req.body.highestQualification,
           marks:req.body.marks ,
           income:req.body.income,
           panNo:req.body.panNo,
           state:req.body.state ,
           address:req.body.address,
           locality:req.body.locality,
           town:req.body.town,
           pincode:req.body.pincode,
           resume:req.body.resume,
           ifscCode:req.body.ifscCode,
           banker:req.body.banker,
           bankBranch:req.body.bankBranch,
           accountType:req.body.accountType,
           accountNo:req.body.accountNo,
           proposal:req.body.proposal,
           othersFile:req.body.othersFile
 })
    details.save()
    res.send(details)
}
catch(error){
    res.status(401).send(error);
}


}