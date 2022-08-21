import mongoose from 'mongoose';
const {ObjectId}=mongoose.Schema.Types;

const applyNowInstituteSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    instituteID:{
        type:ObjectId,
        ref:'Institute'
    },
    agencyID:{
        type:ObjectId,
        ref:'Agency'
    },
    proposal:{
        type:String,
        required:true
    },
    proposalFile:{
        type:String,
        required:true
    }
 
});


let ApplyInstitute= mongoose.models.ApplyInstitute || mongoose.model('ApplyInstitute', applyNowInstituteSchema);
export default ApplyInstitute;