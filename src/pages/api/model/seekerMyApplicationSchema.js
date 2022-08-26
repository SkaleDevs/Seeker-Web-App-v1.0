import mongoose from 'mongoose';
const {ObjectId}=mongoose.Schema.Types;
const seekerFormSchema = new mongoose.Schema({
    // applicationID is the applyNow ObjectId so that when i want to apply and update then it will fetch the applyNow 
    applicationID:{
         type:ObjectId,
         ref:'ApplySeeker'
    },
   seekerID:{
      type:ObjectId,
      ref:'Seeker'
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


let SeekerForm= mongoose.models.SeekerForm || mongoose.model('SeekerForm', seekerFormSchema);
export default SeekerForm;