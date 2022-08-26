import Scheme from '../../model/agencySchemeSchema';
import connectDB from '../../auth/lib/connectDB';
import users from '../../model/userSchema';
import {getSession} from 'next-auth/react';
connectDB();
export default async function handler(req,res){
    const session = await getSession({req})
    console.log(session);
    if (!session || session.user.role!=="funding_agency") {
    return res.status(401).json({error: 'Unauthorized'})
    }
    let data =  await Scheme.findOneAndUpdate({name:req.body.name,agencyEmail:session.user.email},req.body,{new:true});
    if(data){
        return res.send(data);
    }
    try{

        const details=new Scheme({
            agencyEmail:session.user.email,
            name:req.body.name,
            schemeType:req.body.schemeType,
            agencyDescription:req.body.agencyDescription,
            eligibility:req.body.eligibility,
            deadline:req.body.deadline,
            maxAmount:req.body.maxAmount,
            documentsRequired:req.body.documentsRequired,
            schemeOrganisationType:req.body.schemeOrganisationType,
            noOfApplications:0,
            interest:req.body.interest
            
        })
        details.save()
        console.log("id",details.id)
        let data1=await users.find();
        let arr=[]
        let x=data1.map(async(item)=>{
                let ans=await fetch("http://localhost:3000/api/controller/seeker/countnoofmatch",{method:"POST",body:JSON.stringify({scholarshipID:details._id}),headers:{"Content-type":"application/json;charset=UTF-8"}}).then(res=>res.json())
                console.log(ans.message)
                if(ans.message>0){
                      arr.push(item.email)
                    }
                })
                console.log("email",arr)
                // let y=await fetch("http://localhost:3000/api/controller/sendmultiplemail",{method:"POST",body:JSON.stringify({email:arr},{name:details.name}),headers:{"Content-type":"application/json;charset=UTF-8"}}).then(res=>res.json())
                 let result1=Promise.all(x)
                //     let result2=Promise.all(y)
                res.send(details)
            }
            catch(e){
                res.status(500).send(e);
            }
}