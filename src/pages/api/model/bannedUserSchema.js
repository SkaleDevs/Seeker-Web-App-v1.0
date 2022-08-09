import mongoose from 'mongoose';

const bannedUserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    special:{
        type:String,
        required:true
    }
  
});


let bannedUser= mongoose.models.bannedUser || mongoose.model('bannedUser', bannedUserSchema);
export default bannedUser;