import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

  email:{
    type:String,
    required:true
  },
  role:{
    type:String,
    required:false
  },
  special:{
    type:String,
    required:false
  },
  banned:{
    type:String,
    required:true
  }

});


let users= mongoose.models.user || mongoose.model('user', UserSchema);
export default users;