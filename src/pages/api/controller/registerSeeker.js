import Seeker from "../model/seekerSchema";
import connectDB from "../auth/lib/connectDB";
import users from "../model/userSchema";

connectDB();
export default async function handler(req, res) {
  try {
    let check1 = await users.findOne({ email: req.body.email });
    if (check1) {
        return res.send({message:"A user with this email id already exists"});
    }
    console.log(check1);
    console.log(req.body.aadharNo);

    let check2 = await users.findOne({ special: req.body.aadharNo });
    console.log(check2);
    if (check2) {
      return res.send({
        message: "A account with this aadhar no. already exists",
      });
    }
    const details = new Seeker({
      email: req.body.email,
      phNo: req.body.phNo,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      aadharNo: req.body.aadharNo,
      aadharFile: req.body.aadharFile,
      guardianFirstName: req.body.guardianFirstName,
      guardianMiddleName: req.body.guardianMiddleName,
      guardianLastName: req.body.guardianLastName,
      dateOfBirth: req.body.dateOfBirth,
      category: req.body.category,
      sex: req.body.sex,
      marks12: req.body.marks12,
      marks12File: req.body.marks12File,
      marks10: req.body.marks10,
      marks10File: req.body.marks10File,
      highestQualification: req.body.highestQualification,
      highestQualificationmarks: req.body.highestQualificationmarks,
      highestQualificationFile: req.body.highestQualificationFile,
      marks: req.body.marks,
      income: req.body.income,
      panNo: req.body.panNo,
      panFile: req.body.panFile,
      state: req.body.state,
      address: req.body.address,
      locality: req.body.locality,
      pincode: req.body.pincode,
      ifscCode: req.body.ifscCode,
      banker: req.body.banker,
      bankBranch: req.body.bankBranch,
      accountType: req.body.accountType,
      accountNo: req.body.accountNo,
      verified: "No",
      banned: "No",
    });
    details.save();

    const use=new users({
      email:req.body.email,
      role:req.body.role,
      special:req.body.aadharNo,
      banned:"No"
  })
  use.save()

    res.send({ message: "Successfully registered" });
  } catch (err) {
    res.send({ message: err });
  }
}
