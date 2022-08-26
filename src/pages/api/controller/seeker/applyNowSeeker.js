import ApplySeeker from '../../model/applyNowSeekerSchema';
import Scheme from '../../model/agencySchemeSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react'
connectDB();
export default async function handler(req,res){
    const session = await getSession({req})
  if (!session || session.user.role!=="individual") {
  return res.status(401).json({error: 'Unauthorized'})
  }
    let data =  await ApplySeeker.findOneAndUpdate({email:req.body.email, scholarshipID:req.body.scholarshipID,
        seekerID:req.body.seekerID},req.body,{new:true});
    if(data){
        return res.send(data);
    }
    let sch  = await Scheme.find({scholarshipID:req.body.scholarshipID});
    // sch.noOfApplications = sch.noOfApplications+1;
    // let da =  await users.findOneAndUpdate({email:session.user.email},sch,{new:true});
        console.log(req.body);
    

    const details=new ApplySeeker({
           agencyID:sch[0].agencyID,
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
           status:"applied",
           othersFile:req.body.othersFile
 })
    details.save()
    res.send(details)
}