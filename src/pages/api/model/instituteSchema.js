import mongoose from 'mongoose';

const instituteSchema = new mongoose.Schema({
    // Institute Representative's detail
  headName:{
    type:String,
    required:true
  },
  gender:{
     type:String,
     required:true
  },
  designation:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phNo:{
    type:Number,
    required:true
  },
  //.....
  // College Details
  district:{
    type:String,
    required:true
  },
  clgName:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true // rural vs urban
  },
  collegeType:{
    type:String,
    required:true
  },
  //....
  //Management Style
  managementType:{
    type:String,
    required:true
  },
  accrediationNo:{
    type:String,
    required:true
  },
  courseOffered:{
    type:Array,
    required:true
  },
  // AISHE/ITI(NCVT) Code or DISE Code.
  aishecode:{
    type:String,
    required:true
  },
  //proof of that code
  aishefile:{
    type:String,
    required:true
  },
  affiliatedUniversityState:{
    type:String,
    required:true
  },
  affiliatedUniversityName:{
    type:String,
    required:true
  },
  earlierAffiliation:{
    type:String,
    required:true
  },
  //when did the first admission ever take place
  firstAdmissionYear:{
    type:Number,
    required:true
  },
  //has any admission ever completed
  admissionCompleted:{
    type:String,     //yes or no
    required:true
  },
  //any file that proves the existence of college
  proof:{
    type:String,
    required:true
  },
  // Correspondence details
  addressCorrespondence:{
    type:String,
    required:true
  },
  cityCorrespondence:{
     type:String,
     required:true
  },
  stateCorrespondence:{
     type:String,
     required:true
  },
  districtCorrespondence:{
    type:String,
    required:true
  },
  pincodeCorrespondence:{
    type:Number,
    required:true
  },
  // if has been verified by the moderator or not
  verified:{
    type:String,
    required:true
  },
  //if has been banned or not
  banned:{
    type:String,
    required:true
  }

});

let Institute= mongoose.model('Institute', instituteSchema);

export default Institute;