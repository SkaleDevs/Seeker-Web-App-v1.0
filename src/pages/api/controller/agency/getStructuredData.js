import ApplySeeker from '../../model/applyNowSeekerSchema';
import Scheme from '../../model/agencySchemeSchema';
import connectDB from '../../auth/lib/connectDB';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    try{
    // const session = await getSession({req})
    // if (!session || session.user.role!=="funding_agency") {
    // return res.status(401).json({error: 'Unauthorized'})
    // }
    let data1=await Scheme.find({schemeType:"individual"});
    //console.log(data1)
    let data2=[]
    //let data3=[[],[],[],[],[]]
    let a=[]
    
    
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
        
    })
    // let data=await ApplySeeker.find({scholarshipID:req.body.scholarshipID});
    
    console.log("fj",data2)
    
    const results=await Promise.all(x)

   // if(results){
        res.send(data2)
    //}
   }
    catch(error){
        res.status(500).send(error);
    }
    
}