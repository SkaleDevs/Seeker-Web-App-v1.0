import mongoose from 'mongoose';

// when agency wants to register a new scholarship
const agencySchemeSchema = new mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 schemeType:{
    type:String,
    required:true
 },
 agencyDescription:{
   type:String,
   required:true
 },
 //arraytype so that one can list the eligibility criteria in points
 eligibility:{
   type:Array,
   required:true
 },
deadline:{
   type:Date,
   required:true
},
maxAmount:{
   type:Number,
   required:true
},
documentsRequired:{
   type:Array,
   required:true
},
//if incase the agency wants to provdie with some custom pdf regarding the scholarship and scheme
extraDetailFile:{
   type:String,
   required:false
}
});

let Scheme= mongoose.model('Scheme', agencySchemeSchema);

export default Scheme;