import mongoose from 'mongoose';

const seekerFormSchema = new mongoose.Schema({
    // email to identify seeker
   email:{
      type:String,
      required:true
   },
   //pdf format of the previous application
   file:{
    type:String,
    required:true
   }
});

let SeekerForm= mongoose.model('SeekerForm', seekerFormSchema);

export default SeekerForm;