import mongoose from 'mongoose';

const seekerBankSchema = new mongoose.Schema({
   email:{
    type:String,
    required:true
   },
   ifscCode:{
    type:String,
    required:true
   },
   banker:{
    type:String,
    required:true
   },
   bankBranch:{
    type:String,
    required:true
   },
   accountType:{
    type:String,
    required:true
   },
   accountNo:{
    type:String,
    required:true
   }

});

let Bank= mongoose.model('Bank', seekerBankSchema);

export default Bank;