import mongoose from 'mongoose';

// when agency wants to register a new scholarship
const agencySchemeSchema = new mongoose.Schema({
   agencyEmail:{
         type:String,
         required:true
   },
 name:{
    type:String,
    required:true
 },
 schemeType:{
    type:String,
    required:true
 },
 schemeOrganisationType:{
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
   type:String,
   required:true
},
maxAmount:{
   type:String,
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
},
noOfApplications:{
   type:Number,
   required:true
},
interest:{
   type:Array,
   required:false
}
});


let Scheme= mongoose.models.Scheme || mongoose.model('Scheme',agencySchemeSchema);
export default Scheme;