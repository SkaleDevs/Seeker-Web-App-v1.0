import Scheme from '../model/agencySchemeSchema';
import ApplySeeker from '../model/applyNowSeekerSchema';
import connectDB from '../auth/lib/connectDB';
connectDB();
//does even the work of rejecting the verification stuff for agency account

export default async function handler(req,res){
    try{
        let data2=[]
        //let data=await Agency.findAll()
    let data1=await Scheme.find({schemeOrganisationType:"state"});

    const x=data1.map(async(item,val)=>{
        a=await ApplySeeker.find({scholarshipID:item._id});
       console.log("1",a)
       // a.map(it=>{
       //     data2.push({hey:it._id})
       // })
       data2.push(a);
       //console.log(data2)
       //data3[val].push(data2)
      // data2=[]
      
      // if(results){
           
   })
   const results=await Promise.all(x)

   res.status(200).send(data2);}
   catch(error){
       res.status(500).send(error);
   }
}





