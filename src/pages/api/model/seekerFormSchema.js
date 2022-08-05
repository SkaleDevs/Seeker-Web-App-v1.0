import mongoose from 'mongoose';

const seekerFormSchema = new mongoose.Schema({
   email:{
      type:String,
      required:true
   },
   file:{
    type:String,
    required:true
   }
});

let SeekerForm= mongoose.model('SeekerForm', seekerFormSchema);

export default SeekerForm;