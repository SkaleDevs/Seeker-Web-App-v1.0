import mongoose from 'mongoose';

const agencyUserSchema = new mongoose.Schema({

  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
  

});


let agencyuser= mongoose.models.agencyuser || mongoose.model('agencyuser', agencyUserSchema);
export default agencyuser;