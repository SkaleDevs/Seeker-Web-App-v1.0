import mongoose from 'mongoose';
const {ObjectId}=mongoose.Schema.Types;
const instituteFormSchema = new mongoose.Schema({
    // applicationID is the applyNow ObjectId so that when i want to apply and update then it will fetch the applyNow 
    applicationID:{
         type:ObjectId,
         ref:'ApplyInstitute'
    },
   instituteID:{
      type:ObjectId,
      ref:'Institute'
   },
   scholarshipName:{
      type:String,
      required:true
   },
   dateOfApplication:{
      type:String,
      required:true
   },
  
});


let InstituteForm= mongoose.models.InstituteForm || mongoose.model('InstituteForm', instituteFormSchema);
export default InstituteForm;