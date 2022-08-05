import mongoose from 'mongoose';

const agencySchemeSchema = new mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 schemeType:{
    type:String,
    required:true
 },
 

});

let Scheme= mongoose.model('Scheme', agencySchemeSchema);

export default Scheme;