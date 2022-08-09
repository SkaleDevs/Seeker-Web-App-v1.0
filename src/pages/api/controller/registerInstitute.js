import Institute from '../model/instituteSchema';
import connectDB from '../auth/lib/connectDB';
import user from '../model/userSchema';
import bannedUser from '../model/bannedUserSchema';
connectDB();
export default async function handler(req,res){
    let check1=  await user.findOne({email:req.body.email});
    if(check1){
        return res.send("A user with this email id already exists");
    }
    let check2=await user.findOne({special:req.body.aishecode});
    if(check2){
        return res.send("A account with this aishe code already exists")
        }
    let check3=await bannedUser.findOne({email:req.body.email});
    if(check3){
        return res.send("You are banned from using this service");
    }
    let check4=await bannedUser.findOne({special:req.body.aishecode});  
    if(check4){
        return res.send("You are banned from using this service");
    }
    const details=new Institute({
          headName:req.body.headName,
          gender:req.body.gender,
          designation:req.body.designation,
          email:req.body.email,
          phNo:req.body.phNo,
          district:req.body.district,
          clgName:req.body.clgName,
          location:req.body.location, 
          collegeType:req.body.collegeType,
          managementType:req.body.managementType,
          accrediationNo:req.body.accrediationNo,
          courseOffered:req.body.courseOffered,
          aishecode:req.body.aishecode,
          aishefile:req.body.aishefile,
          affiliatedUniversityState:req.body.affiliatedUniversityState,
          affiliatedUniversityName:req.body.affiliatedUniversityName,
          earlierAffiliation:req.body.earlierAffiliation,
          firstAdmissionYear:req.body.firstAdmissionYear,
          admissionCompleted:req.body.admissionCompleted,
          proof:req.body.proof,
          addressCorrespondence:req.body.addressCorrespondence,
          cityCorrespondence:req.body.cityCorrespondence,
          stateCorrespondence:req.body.stateCorrespondence,
          districtCorrespondence:req.body.districtCorrespondence,
          pincodeCorrespondence:req.body.pincodeCorrespondence,
          verified:"No",
          banned:"No",
          
    })
    details.save()
    res.send(details)
}