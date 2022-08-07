import mongoose from 'mongoose';

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

let instituteuser= mongoose.model('instituteuser', instituteUserSchema);

export default instituteuser;