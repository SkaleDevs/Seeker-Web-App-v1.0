import mongoose from 'mongoose';
//import autoIncrement from 'mongoose-auto-increment';
const instituteUserSchema = new mongoose.Schema({

  aishecode:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
  

});


let instituteuser= mongoose.models.instituteuser || mongoose.model('instituteuser', instituteUserSchema);

export default instituteuser;