import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

  email:{
    type:String,
    required:true
  },
  role:{
    type:String,
    required:true
  }

});


let user= mongoose.models.user || mongoose.model('user', UserSchema);
export default user;