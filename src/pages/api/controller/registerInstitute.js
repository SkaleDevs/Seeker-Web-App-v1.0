import Institute from '../model/instituteSchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
export default async function handler(req,res){
    let data =  await Institute.findOneAndUpdate({email:req.body.email},req.body);
    if(data){
        return res.send(data);
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