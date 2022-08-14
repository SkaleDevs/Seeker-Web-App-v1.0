import Seeker from '../model/seekerSchema';
import connectDB from '../auth/lib/connectDB';
import users from '../model/userSchema';

connectDB();
export default async function handler(req,res){
   
    let check1=  await users.findOne({email:req.body.email});
    if(check1){
        return res.send("A user with this email id already exists");
    }
    console.log(check1)
    console.log(req.body.aadharNo)

    let check2=await user.findOne({special:req.body.aadharNo});
    console.log(check2);
    if(check2 ){
        return res.send("A account with this aadhar no. already exists")
    }
    // let check3=await bannedUser.findOne({email:req.body.email});
    // if(check3){
    //     return res.send("You are banned from using this service");
    // }
    // let check4=await bannedUser.findOne({special:req.body.aadharNo});  
    // if(check4){
    //     return res.send("You are banned from using this service");
    // }

    

    const details=new Seeker({
           email:req.body.email,
           phNo:req.body.phNo,
           firstName:req.body.firstName,
           middleName:req.body.middleName,
           lastName:req.body.lastName,
           aadharNo:req.body.aadharNo,
           aadharFile:req.body.aadharFile,
           guardianFirstName:req.body.guardianFirstName,
           guardianMiddleName:req.body.guardianMiddleName,
           guardianLastName:req.body.guardianLastName,
           dateOfBirth:req.body.dateOfBirth,
           category:req.body.category,
           sex:req.body.sex,
           marks12:req.body.marks12,
           marks12File:req.body.marks12File,
           marks10:req.body.marks10,
           marks10File:req.body.marks10File,
           highestQualification:req.body.highestQualification,
           marks:req.body.marks,
           income:req.body.income,
           panNo:req.body.panNo,
           state:req.body.state,
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
           verified:'No',
           banned:'No'
    })
    details.save()
    res.send(details)
}