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
  },
  notif:{
    type:Array,
    required:false
  },
  otp:{
    type:Number,
    required:false,
  },
  expire:{
    type:Number,
    required:false,
  },
  interest:{
    type:Array,
    required:false
  }

});


let users= mongoose.models.user || mongoose.model('user', UserSchema);
export default users;