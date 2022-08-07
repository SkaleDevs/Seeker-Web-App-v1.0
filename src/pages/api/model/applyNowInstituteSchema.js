import mongoose from 'mongoose';
const {ObjectId}=mongoose.Schema.Types;

const applyNowInstituteSchema = new mongoose.Schema({
    
 
});

let ApplyInstitute= mongoose.model('ApplyInstitute', applyNowInstituteSchema);

export default ApplyInstitute;