import mongoose from "mongoose";

const seekerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phNo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: String,
    required: true,
  },
  aadharFile: {
    type: String,
    required: true,
  },
  guardianFirstName: {
    type: String,
    required: true,
  },
  guardianMiddleName: {
    type: String,
    required: false,
  },
  guardianLastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  marks12: {
    type: String,
    required: true,
  },
  marks12File: {
    type: String,
    required: true,
  },
  marks10: {
    type: String,
    required: true,
  },
  marks10File: {
    type: String,
    required: true,
  },
  highestQualification: {
    type: String,
    required: true,
  },
  highestQualificationmarks: {
    type: String,
    required: true,
  },
  highestQualificationFile: {
    type: String,
    required: true,
  },
  income: {
    type: String,
    required: true,
  },
  panNo: {
    type: String,
  },
  panFile: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  ifscCode: {
    type: String,
    required: true,
  },
  banker: {
    type: String,
    required: true,
  },
  bankBranch: {
    type: String,
    required: true,
  },
  accountNo: {
    type: String,
    required: true,
  },
  verified: {
    type: String,
    required: true,
  },
  banned: {
    type: String,
    required: true,
  },
});

let Seeker = mongoose.models.Seeker || mongoose.model("Seeker", seekerSchema);
export default Seeker;
